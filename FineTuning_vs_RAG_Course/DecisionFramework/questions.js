test.AddQuestion( new Question ("df_q1",
                                "In the Decision Matrix, which approach is recommended as the absolute first step for any project?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fine-Tuning", "RAG", "Prompt Engineering", "VPC Deployment"),
                                "Prompt Engineering",
                                "obj_matrix")
                );

test.AddQuestion( new Question ("df_q2",
                                "Scenario: You need a model to answer questions about proprietary research papers that are published every week. Which strategy should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full Fine-Tuning once a year", "RAG with a vector database", "Few-shot prompting with all papers in the prompt", "Zero-shot prompting"),
                                "RAG with a vector database",
                                "obj_scenarios")
                );

test.AddQuestion( new Question ("df_q3",
                                "What does 'TCO' stand for in the context of AI architectural decisions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Technical Code Optimization", "Total Cost of Ownership", "Token Compression Output", "Trained Completion Object"),
                                "Total Cost of Ownership",
                                "obj_cost")
                );

test.AddQuestion( new Question ("df_q4",
                                "Which approach typically has the highest 'Upfront Effort' but can lead to low inference latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Engineering", "RAG", "Fine-Tuning", "API Integration"),
                                "Fine-Tuning",
                                "obj_matrix")
                );

test.AddQuestion( new Question ("df_q5",
                                "When would a 'Hybrid' approach be most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you have no data and no budget", "When you need both real-time factual accuracy (RAG) and specific brand tone (Fine-Tuning)", "When you only want to use one model for everything", "When you are building a simple calculator"),
                                "When you need both real-time factual accuracy (RAG) and specific brand tone (Fine-Tuning)",
                                "obj_scenarios")
                );

test.AddQuestion( new Question ("df_q6",
                                "Why does RAG typically increase token usage compared to Fine-Tuning for the same knowledge base?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because RAG models are less efficient", "Because RAG requires sending the retrieved context snippets along with every query", "Because RAG vectors are larger", "It doesn't; RAG uses fewer tokens"),
                                "Because RAG requires sending the retrieved context snippets along with every query",
                                "obj_cost")
                );
