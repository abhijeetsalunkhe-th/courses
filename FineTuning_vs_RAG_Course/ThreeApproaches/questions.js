test.AddQuestion( new Question ("q1",
                                "Which statement about Strengths is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Generate answers from context", "Strengths", "Fine-Tuning Methods", "Internalized knowledge: No retrieval needed at inference time"),
                                "Internalized knowledge: No retrieval needed at inference time",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following best describes Strengths?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Instruction Tuning: Behavior/format only", "Consistent style: Model adopts your tone, terminology, format", "System prompts: Define role, constraints, and output format", "Chunking challenges: Poor chunking leads to lost context"),
                                "Consistent style: Model adopts your tone, terminology, format",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "How is Strengths best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10K-100K+ examples", "Static knowledge: Requires retraining to update information", "Pinecone, Weaviate, pgvector", "Lower inference cost: No RAG pipeline overhead per request"),
                                "Lower inference cost: No RAG pipeline overhead per request",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "What is a key characteristic of Strengths?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Better at behavioral changes: Teaching new response patterns", "LLM: Generate answers from context", "Inconsistency: Complex prompts may produce variable results", "Vector Database"),
                                "Better at behavioral changes: Teaching new response patterns",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What distinguishes Limitations from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Few-shot examples: Show desired input-output patterns", "Training data quality: Garbage in, garbage out", "Current information: Add or update documents without retraining", "Internalized knowledge: No retrieval needed at inference time"),
                                "Training data quality: Garbage in, garbage out",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "Which of the following is true regarding Limitations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Instant iteration: Change the prompt and test immediately", "Vector Database", "Catastrophic forgetting: May lose general capabilities", "1K-10K examples"),
                                "Catastrophic forgetting: May lose general capabilities",
                                "obj_module_2")
                );