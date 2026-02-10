// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("q1",
                                "From the UnderstandingET section: What is Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5,000-10,000 tokens: Complex reasoning, code debugging, architectural analysis", "Combine with CoT prompting: Ask Claude to \"reason carefully\" even with thinking enabled", "Start small: Begin with a low budget and increase if quality is insufficient", "Text formatting/editing"),
                                "Combine with CoT prompting: Ask Claude to \"reason carefully\" even with thinking enabled",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "Regarding UnderstandingET: What is a key feature of How It Works?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Code review with deep analysis", "Translations", "Thinking tokens: Claude uses internal reasoning tokens (visible to you) before the fina...", "Budget Token Guidelines"),
                                "Thinking tokens: Claude uses internal reasoning tokens (visible to you) before the fina...",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "From UnderstandingET: How does How It Works work?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Code review with deep analysis: Summarization of short texts", "Security vulnerability analysis", "Thinking tokens: Claude uses internal reasoning tokens (visible to you) before the fina...", "Budget control: You set a max_tokens budget for thinking"),
                                "Budget control: You set a max_tokens budget for thinking",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "In the context of UnderstandingET: Which of the following describes How It Works?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Transparent reasoning: You can see Claude\'s thought process in thinking content blocks", "Budget Token Guidelines", "Thinking tokens are billed at the output token rate. A 10,000-token thinking budget add...", "Text formatting/editing"),
                                "Transparent reasoning: You can see Claude\'s thought process in thinking content blocks",
                                "obj_final_assessment")
                );