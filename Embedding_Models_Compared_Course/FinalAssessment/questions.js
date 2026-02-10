test.AddQuestion( new Question ("final_q1",
                                "Which embedding provider is recommended by Anthropic for use with Claude models due to its optimization for long documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI", "Cohere", "Voyage AI", "Google Cloud"),
                                "Voyage AI",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q2",
                                "In the context of embeddings, what does 'NDCG@10' typically measure in a benchmark like MTEB?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The speed of vector generation", "The quality of document retrieval for the top 10 results", "The memory usage of a 10-dimensional vector", "The cost of processing 10 tokens"),
                                "The quality of document retrieval for the top 10 results",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q3",
                                "Which of the following is a key advantage of using API-based embedding models like those from Cohere or OpenAI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Zero per-token costs", "No requirement for internet connectivity", "Scalability without infrastructure management", "Absolute control over model weights"),
                                "Scalability without infrastructure management",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q4",
                                "Scenario: You are building a cross-lingual search engine that needs to handle queries in 50 different languages. Which model is specifically designed for this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("text-embedding-3-small", "embed-v3.0 (Cohere)", "bge-large-en-v1.5", "voyage-3"),
                                "embed-v3.0 (Cohere)",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q5",
                                "What is the approximate storage requirement for 1 million vectors with 3072 dimensions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("~1 GB", "~3 GB", "~4 GB", "~12 GB"),
                                "~12 GB",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q6",
                                "Which of these is NOT a typical task evaluated in the MTEB benchmark?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Clustering", "Sentiment Analysis", "Retrieval", "Code Execution"),
                                "Code Execution",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q7",
                                "If you truncate an OpenAI 'text-embedding-3-large' vector from 3072 to 256 dimensions, what is the expected impact on retrieval performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Performance drops to 0%", "Performance remains at nearly 100% with no loss", "Performance typically remains high (around 95% of full quality)", "Performance drops by exactly 50%"),
                                "Performance typically remains high (around 95% of full quality)",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q8",
                                "Why might a company choose to self-host an open-source model like BGE despite the infra overhead?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To gain access to GPT-4 features", "To ensure data never leaves their secure environment", "Because open-source models are always more accurate than APIs", "To avoid using Python for development"),
                                "To ensure data never leaves their secure environment",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q9",
                                "Which component in a RAG pipeline is responsible for finding documents that are 'mathematically close' to the user query?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The LLM", "The Embedding Model", "The Vector Database", "The Prompt Template"),
                                "The Vector Database",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q10",
                                "What happens to the 'intent' of a word when it is converted into an embedding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is lost during tokenization", "It is captured as a spatial relationship within a high-dimensional vector space", "It is replaced by a dictionary definition", "It is converted into a binary yes/no value"),
                                "It is captured as a spatial relationship within a high-dimensional vector space",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q11",
                                "A 'dense' vector in embeddings is characterized by:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Having mostly zero values", "Having mostly non-zero numerical values", "Being very short (under 10 dimensions)", "Containing only integer values"),
                                "Having mostly non-zero numerical values",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q12",
                                "Which of the following models is currently considered the most cost-effective for high-volume API-based embedding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("text-embedding-3-large", "text-embedding-3-small", "voyage-3", "embed-v3.0"),
                                "text-embedding-3-small",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q13",
                                "What is the primary risk of using an embedding model trained only on general web data for a medical application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model will be too slow", "The model may not capture the nuances of specialized medical terminology", "The model will cost more to run", "The vectors will be too small"),
                                "The model may not capture the nuances of specialized medical terminology",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q14",
                                "How does tokenization affect the embedding process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It increases the dimensionality of the vector", "It breaks text into manageable chunks before vector conversion", "It encrypts the text for security", "It removes all punctuation from the document"),
                                "It breaks text into manageable chunks before vector conversion",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q15",
                                "In a 'Matryoshka' model, why is it possible to truncate the vector?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because the model is trained to pack the most important information into the earlier dimensions", "Because the later dimensions are always random noise", "Because the model uses a compression algorithm like ZIP", "Because the dimensions are alphabetically sorted"),
                                "Because the model is trained to pack the most important information into the earlier dimensions",
                                "obj_final")
                );
