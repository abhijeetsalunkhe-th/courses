test.AddQuestion( new Question ("em_q1",
                                "What is the primary purpose of text embeddings in AI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress text for faster transmission", "To represent semantic meaning as dense vectors in N-dimensional space", "To translate text between different languages", "To check for grammatical errors in a document"),
                                "To represent semantic meaning as dense vectors in N-dimensional space",
                                "obj_embedding_fundamentals")
                );

test.AddQuestion( new Question ("em_q2",
                                "Which mathematical formula is most commonly used to measure the similarity between two embedding vectors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Euclidean distance", "Manhattan distance", "Cosine similarity", "Pearson correlation"),
                                "Cosine similarity",
                                "obj_embedding_fundamentals")
                );

test.AddQuestion( new Question ("em_q3",
                                "A developer needs to build a RAG pipeline for 50-page technical manuals. Which model feature is MOST critical for this use case?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Low dimensionality", "A large context window (e.g., 32K tokens)", "Low per-token cost", "Open-source licensing"),
                                "A large context window (e.g., 32K tokens)",
                                "obj_choosing_models")
                );

test.AddQuestion( new Question ("em_q4",
                                "What is a unique feature of OpenAI's Matryoshka embeddings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They can only be used with GPT-4", "They allow embeddings to be truncated to smaller sizes with minimal quality loss", "They are specifically designed for image data", "They require a specialized vector database"),
                                "They allow embeddings to be truncated to smaller sizes with minimal quality loss",
                                "obj_choosing_models")
                );

test.AddQuestion( new Question ("em_q5",
                                "Scenario: Your company has strict data privacy requirements and cannot send data to third-party APIs. Which model should you choose?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI text-embedding-3-large", "Cohere embed-v3", "BAAI bge-large-en-v1.5 (Self-hosted)", "Voyage-3"),
                                "BAAI bge-large-en-v1.5 (Self-hosted)",
                                "obj_choosing_models")
                );

test.AddQuestion( new Question ("em_q6",
                                "Which benchmark is considered the industry standard for evaluating embedding models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GLUE", "SuperGLUE", "MTEB (Massive Text Embedding Benchmark)", "SQuAD"),
                                "MTEB (Massive Text Embedding Benchmark)",
                                "obj_embedding_fundamentals")
                );

test.AddQuestion( new Question ("em_q7",
                                "When is fine-tuning an embedding model typically recommended?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For every new application to ensure maximum accuracy", "When the data contains highly specialized vocabulary not present in general training sets", "To reduce the dimensionality of the vectors", "To speed up the inference time of the API"),
                                "When the data contains highly specialized vocabulary not present in general training sets",
                                "obj_finetuning")
                );

test.AddQuestion( new Question ("em_q8",
                                "What is a major trade-off when increasing the number of dimensions in an embedding model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased accuracy but higher storage and search latency", "Decreased accuracy but lower cost", "Better multilingual support but shorter context window", "No trade-offs; higher dimensions are always better"),
                                "Increased accuracy but higher storage and search latency",
                                "obj_embedding_fundamentals")
                );
