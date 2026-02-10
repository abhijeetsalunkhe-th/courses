test.AddQuestion( new Question ("com.scorm.claude.et.m1.q1",
                                "What are 'thinking tokens' in the context of Claude's Extended Thinking feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tokens used for text formatting and style adjustments", "Tokens that are used for prompt caching and are never billed", "Internal reasoning tokens used by the model before generating a final response", "Tokens used exclusively for image generation within the Chat interface"),
                                "Internal reasoning tokens used by the model before generating a final response",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q2",
                                "A developer is tasked with debugging a complex race condition in a distributed system. Based on the guidelines, which thinking budget would be most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100 - 500 tokens", "4,000 - 16,000 tokens", "50 - 100 tokens", "Thinking should be disabled for debugging"),
                                "4,000 - 16,000 tokens",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q3",
                                "How are tokens used during the 'thinking' phase billed to the developer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("At the same rate as standard output tokens", "At a discounted rate compared to input tokens", "They are provided for free as part of the premium subscription", "At the standard input token rate"),
                                "At the same rate as standard output tokens",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q4",
                                "Which of the following best describes the relationship between 'budget_tokens' and 'max_tokens'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are two names for the same parameter", "budget_tokens must be exactly equal to max_tokens", "budget_tokens must be greater than max_tokens", "max_tokens must be greater than budget_tokens to allow for the final response"),
                                "max_tokens must be greater than budget_tokens to allow for the final response",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q5",
                                "A user wants to know the capital of France. Is enabling Extended Thinking recommended for this task?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Yes, it ensures the model doesn't hallucinate common facts", "No, it adds unnecessary latency and cost for a straightforward factual query", "Yes, all queries should use at least 1,000 thinking tokens", "No, Extended Thinking is only for creative writing tasks"),
                                "No, it adds unnecessary latency and cost for a straightforward factual query",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q6",
                                "What is a primary benefit of the 'thinking' phase for complex problem solving?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows the model to search the live web for real-time data", "It reduces the total number of tokens required for the final response", "It provides a workspace for self-correction and evaluation of multiple hypotheses", "It automatically translates the output into multiple languages"),
                                "It provides a workspace for self-correction and evaluation of multiple hypotheses",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q7",
                                "In a standard API call to a supported model, which parameter is used to enable Extended Thinking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The 'thinking' configuration block with 'type' set to 'enabled'", "The 'reasoning_depth' integer parameter", "The 'cot_mode' boolean flag", "The 'max_reasoning_tokens' parameter in the header"),
                                "The 'thinking' configuration block with 'type' set to 'enabled'",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.claude.et.m1.q8",
                                "If Claude stops generating a response with a stop_reason of 'max_tokens' while thinking is enabled, what is the most likely remediation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable prompt caching to free up token space", "Reduce the temperature to 0.0", "Switch to a cheaper model tier", "Increase the 'max_tokens' value to accommodate both reasoning and response"),
                                "Increase the 'max_tokens' value to accommodate both reasoning and response",
                                "obj_module_1")
                );