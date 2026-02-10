test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q1",
                                "Why is asynchronous processing critical for a positive user experience in GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because LLM responses are typically slow (10-60 seconds)", "To ensure the AI never makes a mistake", "Because it uses 90% less electricity", "To prevent the user from seeing the final answer"),
                                "Because LLM responses are typically slow (10-60 seconds)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q2",
                                "Which asynchronous pattern involves server-sent events (SSE) to provide real-time feedback as tokens appear?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Polling", "Webhooks", "Batch Processing", "Streaming"),
                                "Streaming",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q3",
                                "What is the primary function of Kubernetes Event-driven Autoscaling (KEDA) in a GenAI architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To translate prompts into multiple languages", "To scale worker pods based on the depth of the event queue", "To encrypt the vector database", "To provide a web-based chat interface"),
                                "To scale worker pods based on the depth of the event queue",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q4",
                                "Which type of caching allows a system to return an answer for a question that is semantically similar to one already in the cache?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Browser Caching", "Redis Result Caching", "Semantic Caching", "Prompt Caching"),
                                "Semantic Caching",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q5",
                                "How does 'Prompt Caching' at the provider level help optimize a GenAI system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By deleting all user prompts after 5 minutes", "By allowing the reuse of processed context or system prompts across many requests", "By forcing users to pay for their own tokens", "By encrypting the prompt before it is sent"),
                                "By allowing the reuse of processed context or system prompts across many requests",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q6",
                                "In the context of scaling, what does 'Model Tiering' refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using only the largest model for all tasks", "Building models in physical tiers in a server rack", "Routing simple requests to cheaper models and complex ones to premium models", "Organizng models by the date they were released"),
                                "Routing simple requests to cheaper models and complex ones to premium models",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q7",
                                "Which strategy involves removing unnecessary instructions from a prompt to minimize input token costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Injection", "Prompt Pruning", "Model Distillation", "Token Mining"),
                                "Prompt Pruning",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.arch.m2.q8",
                                "What is the main advantage of using a 'Polling' pattern for long-running AI jobs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It provides an immediate answer in under 1 second", "It allows the client to periodically check for completion without keeping a long-lived connection open", "It uses the client's GPU to process the model", "It automatically translates the output"),
                                "It allows the client to periodically check for completion without keeping a long-lived connection open",
                                "obj_module_2")
                );