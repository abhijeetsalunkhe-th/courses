test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q1",
                                "Which architecture pattern is most suitable for a rapid prototype or an MVP with a small team?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Monolith", "Event-Driven", "Microservices", "Mesh Architecture"),
                                "Monolith",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q2",
                                "If an AI task, such as generating a 50-page report, takes 45 seconds to complete, which pattern is recommended to handle the request without blocking the user interface?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Standard Monolith", "Client-side processing only", "Event-Driven with a message queue", "Direct synchronous API call"),
                                "Event-Driven with a message queue",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q3",
                                "What is a primary financial benefit of using a Serverless pattern for GenAI webhooks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed monthly cost regardless of use", "Pay-per-execution, minimizing costs for idle time", "Unlimited GPU access for free", "Exemption from data egress charges"),
                                "Pay-per-execution, minimizing costs for idle time",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q4",
                                "When using a Microservices architecture for a GenAI pipeline, what is the main advantage of separating the 'Embedding' service from the 'Generation' service?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the total number of lines of code", "It allows both services to share the same CPU core", "It makes debugging much harder", "It allows for independent scaling based on the specific resource needs of each task"),
                                "It allows for independent scaling based on the specific resource needs of each task",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q5",
                                "A startup expects highly unpredictable traffic for their new AI chatbot. Which scaling strategy or pattern should they prioritize to handle spikes efficiently?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vertical scaling of a single server", "Serverless with automatic scaling", "Manual provisioning of bare metal servers", "Disabling the chatbot during peak hours"),
                                "Serverless with automatic scaling",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q6",
                                "Which caching technique uses vector similarity to provide answers to questions that are semantically identical but worded differently?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Key-Value Caching", "Browser Caching", "Semantic Caching", "CDN Caching"),
                                "Semantic Caching",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q7",
                                "What is 'Model Tiering' in the context of cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Routing simple queries to cheaper models and complex ones to premium models", "Using only the most expensive model for every request", "Building models on physical tiers in a data center", "Limiting AI access to only premium users"),
                                "Routing simple queries to cheaper models and complex ones to premium models",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m1.q8",
                                "When scaling worker pools for background AI processing, what is the primary metric used by tools like KEDA to trigger an upscale?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Current time of day", "The number of users logged into the website", "The color of the server rack lights", "The depth (number of messages) of the event queue"),
                                "The depth (number of messages) of the event queue",
                                "obj_module_1")
                );