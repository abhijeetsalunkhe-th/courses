test.AddQuestion( new Question ("q1",
                                "What is an important aspect of Decision Flowchart?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hallucination Risk", "Domain behavior", "Yes: Use Prompt Engineering. Start here always.", "Setup Cost: None"),
                                "Yes: Use Prompt Engineering. Start here always.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What distinguishes Decision Flowchart from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hallucination Risk: Higher", "No: Continue to Question 2.", "Inference Cost: Token-based", "Data Required: 0 examples"),
                                "No: Continue to Question 2.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What role does Decision Flowchart play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hallucination Risk: Higher", "Setup Cost: None", "Higher", "Yes: Use RAG. Documents can be updated without retraining."),
                                "Yes: Use RAG. Documents can be updated without retraining.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which statement about Decision Flowchart is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No: Continue to Question 3.", "Domain behavior", "Inference Cost: Token-based", "Token-based"),
                                "No: Continue to Question 3.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What does Decision Flowchart involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Time to Deploy", "Time to Deploy: Minutes", "Knowledge: Use RAG. More reliable for factual grounding.", "Yes: Use Prompt Engineering. Start here always."),
                                "Knowledge: Use RAG. More reliable for factual grounding.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "How is Decision Flowchart best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Behavior/Style: Use Fine-Tuning. Better for tone, format, domain language.", "0 examples", "Retrain model", "Hybrid Approaches"),
                                "Behavior/Style: Use Fine-Tuning. Better for tone, format, domain language.",
                                "obj_module_1")
                );