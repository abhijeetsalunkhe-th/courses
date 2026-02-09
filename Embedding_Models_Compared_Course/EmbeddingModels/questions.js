test.AddQuestion( new Question ("q1",
                                "What role does Choosing the Right Embedding Model play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Good for simple tasks", "Cohere embed-v3: $0.10", "Cohere", "Context length: Voyage-3 handles 32K tokens; others max at 512-8K"),
                                "Context length: Voyage-3 handles 32K tokens; others max at 512-8K",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following best describes Choosing the Right Embedding Model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multilingual needs: Cohere embed-v3 supports 100+ languages natively", "~12 GB", "bge-large-en-v1.5", "Highest quality"),
                                "Multilingual needs: Cohere embed-v3 supports 100+ languages natively",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is a key characteristic of Choosing the Right Embedding Model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slower", "Good general purpose", "Self-hosting: BGE models can run on your infrastructure (no API costs)", "OpenAI text-embedding-3-small: $0.02"),
                                "Self-hosting: BGE models can run on your infrastructure (no API costs)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What distinguishes Choosing the Right Embedding Model from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Semantic Similarity: Most modern models are competitive", "Cost: OpenAI small is cheapest per token; self-hosted BGE is free after GPU", "Voyage voyage-3: $0.06", "Choosing the Right Embedding Model"),
                                "Cost: OpenAI small is cheapest per token; self-hosted BGE is free after GPU",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which statement about Choosing the Right Embedding Model is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ecosystem: Match your LLM provider (Voyage for Claude, Google for Gemini)", "Good for simple tasks", "Best price/performance for API", "3072: ~12 GB"),
                                "Ecosystem: Match your LLM provider (Voyage for Claude, Google for Gemini)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is an important aspect of MTEB Benchmark Results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("text-embedding-3-small", "Ecosystem: Match your LLM provider (Voyage for Claude, Google for Gemini)", "Retrieval (NDCG@10): Voyage-3 and OpenAI large consistently lead", "Self-hosting: BGE models can run on your infrastructure (no API costs)"),
                                "Retrieval (NDCG@10): Voyage-3 and OpenAI large consistently lead",
                                "obj_module_1")
                );