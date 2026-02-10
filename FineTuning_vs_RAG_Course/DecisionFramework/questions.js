test.AddQuestion( new Question ("df_q1",
                                "In the Decision Matrix, which approach is recommended as the absolute first step for any project?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Engineering", "Fine-Tuning", "VPC Deployment", "RAG"),
                                "Prompt Engineering",
                                "obj_matrix")
                );

test.AddQuestion( new Question ("df_q2",
                                "Scenario: You need a model to answer questions about proprietary research papers that are published every week. Which strategy should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG with a vector database", "Full Fine-Tuning once a year", "Zero-shot prompting", "Few-shot prompting with all papers in the prompt"),
                                "RAG with a vector database",
                                "obj_scenarios")
                );

test.AddQuestion( new Question ("df_q3",
                                "What does 'TCO' stand for in the context of AI architectural decisions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Trained Completion Object", "Token Compression Output", "Total Cost of Ownership", "Technical Code Optimization"),
                                "Total Cost of Ownership",
                                "obj_cost")
                );

test.AddQuestion( new Question ("df_q4",
                                "Which approach typically has the highest 'Upfront Effort' but can lead to low inference latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Engineering", "API Integration", "RAG", "Fine-Tuning"),
                                "Fine-Tuning",
                                "obj_matrix")
                );

test.AddQuestion( new Question ("df_q5",
                                "When would a 'Hybrid' approach be most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you only want to use one model for everything", "When you are building a simple calculator", "When you need both real-time factual accuracy (RAG) and specific brand tone (Fine-Tuning)", "When you have no data and no budget"),
                                "When you need both real-time factual accuracy (RAG) and specific brand tone (Fine-Tuning)",
                                "obj_scenarios")
                );

test.AddQuestion( new Question ("df_q6",
                                "Why does RAG typically increase token usage compared to Fine-Tuning for the same knowledge base?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It doesn't; RAG uses fewer tokens", "Because RAG requires sending the retrieved context snippets along with every query", "Because RAG vectors are larger", "Because RAG models are less efficient"),
                                "Because RAG requires sending the retrieved context snippets along with every query",
                                "obj_cost")
                );

test.AddQuestion( new Question ("df_q7",
                                "What is a 'Vector Database' primarily used for in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hosting the web interface", "Storing and searching high-dimensional embeddings", "Calculating the final probability of words", "Compressing the LLM parameters"),
                                "Storing and searching high-dimensional embeddings",
                                "obj_rag")
                );

test.AddQuestion( new Question ("df_q8",
                                "Which factor in the Decision Matrix refers to the speed at which a model returns a response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Feasibility", "TCO", "Accuracy", "Latency"),
                                "Latency",
                                "obj_matrix")
                );
