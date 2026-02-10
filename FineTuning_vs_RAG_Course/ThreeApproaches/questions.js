test.AddQuestion( new Question ("ftr_q1",
                                "What is the primary technical difference between RAG and Fine-Tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fine-Tuning modifies the model weights, while RAG provides external context in the prompt.", "There is no technical difference.", "RAG is only for images, while Fine-Tuning is for text.", "RAG modifies the model weights, while Fine-Tuning uses external data."),
                                "Fine-Tuning modifies the model weights, while RAG provides external context in the prompt.",
                                "obj_comparison")
                );

test.AddQuestion( new Question ("ftr_q2",
                                "Which approach is considered the most 'dynamic' for providing up-to-date information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual Overrides", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Fine-Tuning"),
                                "Retrieval-Augmented Generation (RAG)",
                                "obj_rag")
                );

test.AddQuestion( new Question ("ftr_q3",
                                "What does the 'A' in RAG stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Artificial", "Advanced", "Augmented", "Applied"),
                                "Augmented",
                                "obj_rag")
                );

test.AddQuestion( new Question ("ftr_q4",
                                "Which technique involves providing a few examples of desired behavior directly in the system message?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LoRA", "Few-Shot Prompting", "Full Fine-Tuning", "Vector Ingestion"),
                                "Few-Shot Prompting",
                                "obj_prompt")
                );

test.AddQuestion( new Question ("ftr_q5",
                                "If you need a model to strictly adhere to a highly specialized JSON schema for every response, which method is MOST reliable for behavior?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Asking nicely", "Zero-shot prompting", "RAG", "Fine-Tuning"),
                                "Fine-Tuning",
                                "obj_finetuning")
                );

test.AddQuestion( new Question ("ftr_q6",
                                "What is a major disadvantage of Fine-Tuning compared to RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It cannot be used with Claude", "It requires a vector database", "The knowledge becomes static and requires retraining to update", "It is always cheaper to run"),
                                "The knowledge becomes static and requires retraining to update",
                                "obj_finetuning")
                );

test.AddQuestion( new Question ("ftr_q7",
                                "What is 'Hallucination' in the context of LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When the model generates factually incorrect information", "When the model refuses to answer", "When the model runs out of memory", "When the model uses too many tokens"),
                                "When the model generates factually incorrect information",
                                "obj_hallucination")
                );

test.AddQuestion( new Question ("ftr_q8",
                                "Which component of RAG is responsible for converting the user's query into a vector?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Tokenizer", "The LLM", "The Orchestrator", "The Embedding Model"),
                                "The Embedding Model",
                                "obj_rag")
                );
