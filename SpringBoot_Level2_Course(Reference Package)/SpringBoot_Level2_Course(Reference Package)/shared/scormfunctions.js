/*
Source code created by Rustici Software, LLC is licensed under a 
Creative Commons Attribution 3.0 United States License
(http://creativecommons.org/licenses/by/3.0/us/)

Want to make SCORM easy? See our solutions at http://www.scorm.com.

This example provides for the bare minimum SCORM run-time calls.
It will demonstrate using the API discovery algorithm to find the
SCORM API and then calling Initialize and Terminate when the page
loads and unloads respectively. This example also demonstrates
some basic SCORM error handling.
*/

// Custom Modal Styles and Function
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    var style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .custom-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); backdrop-filter: blur(5px); display: flex; justify-content: center; align-items: center; z-index: 10000; }
        .modal-content { background: white; border: 3px solid #F16F00; border-radius: 15px; padding: 2rem; max-width: 500px; width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
        .modal-title { color: #F16F00; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
        .modal-message { color: #333; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.5; }
        .modal-button { background: linear-gradient(135deg, #F16F00 0%, #e91e63 50%, #9c27b0 100%); color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; }
        .modal-button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(241,111,0,0.3); }
    `;
    document.head.appendChild(style);
}

function showModal(title, message) {
    addModalStyles();
    var modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = '<div class="modal-content"><div class="modal-title">' + title + '</div><div class="modal-message">' + message + '</div><button class="modal-button">OK</button></div>';
    document.body.appendChild(modal);
    
    // Add click handler to button
    modal.querySelector('.modal-button').onclick = function() {
        modal.remove();
    };
}


//Include the standard ADL-supplied API discovery algorithm


///////////////////////////////////////////
//Begin ADL-provided API discovery algorithm
///////////////////////////////////////////
var findAPITries = 0;

function findAPI(win)
{
   // Check to see if the window (win) contains the API
   // if the window (win) does not contain the API and
   // the window (win) has a parent window and the parent window
   // is not the same as the window (win)
   while ( (win.API == null) &&
           (win.parent != null) &&
           (win.parent != win) )
   {
      // increment the number of findAPITries
      findAPITries++;

      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7)
      {
         showModal("API Error", "Error finding API -- too deeply nested.");
         return null;
      }

      // set the variable that represents the window being
      // being searched to be the parent of the current window
      // then search for the API again
      win = win.parent;
   }
   return win.API;
}

function getAPI()
{
   // start by looking for the API in the current window
   var theAPI = findAPI(window);

   // if the API is null (could not be found in the current window)
   // and the current window has an opener window
   if ( (theAPI == null) &&
        (window.opener != null) &&
        (typeof(window.opener) != "undefined") )
   {
      // try to find the API in the current window�s opener
      theAPI = findAPI(window.opener);
   }
   // if the API has not been found
   if (theAPI == null)
   {
      // Silent mode - no popup, just log to console
      console.log("SCORM API not found - running in standalone mode");
   }
   return theAPI;
}


///////////////////////////////////////////
//End ADL-provided API discovery algorithm
///////////////////////////////////////////
  
  
//Create function handlers for the loading and unloading of the page


//Constants
var SCORM_TRUE = "true";
var SCORM_FALSE = "false";
var SCORM_NO_ERROR = "0";

//Since the Unload handler will be called twice, from both the onunload
//and onbeforeunload events, ensure that we only call LMSFinish once.
var finishCalled = false;

//Track whether or not we successfully initialized.
var initialized = false;

var API = null;

function ScormProcessInitialize(){
    var result;
    
    API = getAPI();
    
    if (API == null){
        console.log("SCORM API not found - running in standalone mode");
        return;
    }
    
    result = API.LMSInitialize("");
    
    if (result == SCORM_FALSE){
        var errorNumber = API.LMSGetLastError();
        var errorString = API.LMSGetErrorString(errorNumber);
        var diagnostic = API.LMSGetDiagnostic(errorNumber);
        
        var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
        
        showModal("Initialization Error", "Error - Could not initialize communication with the LMS.\n\nYour results may not be recorded.\n\n" + errorDescription);
        return;
    }
    
    initialized = true;
}

function ScormProcessFinish(){
    
    var result;
    
    //Don't terminate if we haven't initialized or if we've already terminated
    if (initialized == false || finishCalled == true){return;}
    
    result = API.LMSFinish("");
    
    finishCalled = true;
    
    if (result == SCORM_FALSE){
        var errorNumber = API.LMSGetLastError();
        var errorString = API.LMSGetErrorString(errorNumber);
        var diagnostic = API.LMSGetDiagnostic(errorNumber);
        
        var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
        
        showModal("Termination Error", "Error - Could not terminate communication with the LMS.\n\nYour results may not be recorded.\n\n" + errorDescription);
        return;
    }
}


/*
The onload and onunload event handlers are assigned in launchpage.html because more processing needs to 
occur at these times in this example.
*/
//window.onload = ScormProcessInitialize;
//window.onunload = ScormProcessTerminate;
//window.onbeforeunload = ScormProcessTerminate;


function ScormProcessGetValue(element){
    
    var result;
    
    if (initialized == false || finishCalled == true){return;}
    
    result = API.LMSGetValue(element);
    
    if (result == ""){
    
        var errorNumber = API.LMSGetLastError();
        
        if (errorNumber != SCORM_NO_ERROR){
            var errorString = API.LMSGetErrorString(errorNumber);
            var diagnostic = API.LMSGetDiagnostic(errorNumber);
            
            var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
            
            showModal("Retrieval Error", "Error - Could not retrieve a value from the LMS.\n\n" + errorDescription);
            return "";
        }
    }
    
    return result;
}

function ScormProcessSetValue(element, value){
   
    var result;
    
    if (initialized == false || finishCalled == true){return;}
    
    result = API.LMSSetValue(element, value);
    
    if (result == SCORM_FALSE){
        var errorNumber = API.LMSGetLastError();
        var errorString = API.LMSGetErrorString(errorNumber);
        var diagnostic = API.LMSGetDiagnostic(errorNumber);
        
        var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
        
        showModal("Storage Error", "Error - Could not store a value in the LMS.\n\nYour results may not be recorded.\n\n" + errorDescription);
        return;
    }
    
}