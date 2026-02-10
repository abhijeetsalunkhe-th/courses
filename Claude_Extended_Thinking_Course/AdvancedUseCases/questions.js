test.AddQuestion( new Question ("com.scorm.claude.et.m2.q1",
                                "What is meant by 'synergistic prompting' in the context of Extended Thinking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Designing prompts that provide the necessary space and context for the model's internal reasoning", "Using multiple models in parallel to verify the same thinking budget", "Asking the model to think in a specific human language only", "Prompts that explicitly disable all reasoning to save costs"),
                                "Designing prompts that provide the necessary space and context for the model's internal reasoning",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q2",
                                "When performing a deep security audit of a smart contract with Extended Thinking, which instruction is most likely to produce high-quality results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Summarize this code in 100 words", "List all variables in alphabetical order", "Use your thinking phase to simulate multiple transaction flows and check for state changes", "Rewrite this code in Python for better readability"),
                                "Use your thinking phase to simulate multiple transaction flows and check for state changes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q3",
                                "What is the best way to focus Claude's thinking budget on a specific area of a problem?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Decrease the total max_tokens", "Provide explicit budget-aware instructions in the prompt", "Use a lower temperature setting", "Only use one-shot examples in the prompt"),
                                "Provide explicit budget-aware instructions in the prompt",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q4",
                                "The 'Room to Reason' pattern is best suited for which of the following scenarios?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single-word translations", "Converting JSON to CSV", "Correcting minor typos in a short paragraph", "Open-ended research and evaluating complex trade-offs"),
                                "Open-ended research and evaluating complex trade-offs",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q5",
                                "If a prompt already has Extended Thinking enabled, what is a common pitfall when adding traditional 'Think step-by-step' instructions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It causes the API to return a 400 error", "It creates redundant instructions that may conflict with internal reasoning or waste tokens", "It automatically doubles the cost of the thinking phase", "It prevents the model from using any thinking tokens"),
                                "It creates redundant instructions that may conflict with internal reasoning or waste tokens",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q6",
                                "What is a key advantage of using self-critique loops within an Extended Thinking session?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows the model to ignore the system prompt", "It reduces the time-to-first-token", "It enables the model to evaluate alternative interpretations before committing to an answer", "It forces the model to use the minimum possible number of tokens"),
                                "It enables the model to evaluate alternative interpretations before committing to an answer",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q7",
                                "From a User Experience (UX) perspective, how should high-latency Extended Thinking responses be handled?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Implement streaming and use loading indicators or 'Thinking...' states", "Block the user interface until the entire response is ready", "Automatically timeout after 2 seconds to keep the app responsive", "Disable Extended Thinking for all mobile users"),
                                "Implement streaming and use loading indicators or 'Thinking...' states",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m2.q8",
                                "Why might a developer implement an intent classifier before an Extended Thinking API call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt the prompt before it is sent to Anthropic", "To compress the prompt to save input token costs", "To verify that the user has a valid subscription", "To decide whether to enable Extended Thinking based on task complexity"),
                                "To decide whether to enable Extended Thinking based on task complexity",
                                "obj_module_2")
                );