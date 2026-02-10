test.AddQuestion( new Question ("ftr_q1",
                                "What is the primary technical difference between RAG and Fine-Tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG modifies the model weights, while Fine-Tuning uses external data.", "Fine-Tuning modifies the model weights, while RAG provides external context in the prompt.", "RAG is only for images, while Fine-Tuning is for text.", "There is no technical difference."),
                                "Fine-Tuning modifies the model weights, while RAG provides external context in the prompt.",
                                "obj_comparison")
                );

test.AddQuestion( new Question ("ftr_q2",
                                "Which approach is considered the most 'dynamic' for providing up-to-date information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Engineering", "Fine-Tuning", "Retrieval-Augmented Generation (RAG)", "Manual Overrides"),
                                "Retrieval-Augmented Generation (RAG)",
                                "obj_rag")
                );

test.AddQuestion( new Question ("ftr_q3",
                                "What does the 'A' in RAG stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Artificial", "Augmented", "Advanced", "Applied"),
                                "Augmented",
                                "obj_rag")
                );

test.AddQuestion( new Question ("ftr_q4",
                                "Which technique involves providing a few examples of desired behavior directly in the system message?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full Fine-Tuning", "Few-Shot Prompting", "LoRA", "Vector Ingestion"),
                                "Few-Shot Prompting",
                                "obj_prompt")
                );

test.AddQuestion( new Question ("ftr_q5",
                                "If you need a model to strictly adhere to a highly specialized JSON schema for every response, which method is MOST reliable for behavior?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Zero-shot prompting", "RAG", "Fine-Tuning", "Asking nicely"),
                                "Fine-Tuning",
                                "obj_finetuning")
                );

test.AddQuestion( new Question ("ftr_q6",
                                "What is a major disadvantage of Fine-Tuning compared to RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires a vector database", "It cannot be used with Claude", "The knowledge becomes static and requires retraining to update", "It is always cheaper to run"),
                                "The knowledge becomes static and requires retraining to update",
                                "obj_finetuning")
                );
