test.AddQuestion( new Question ("final_q1",
                                "Which embedding provider is recommended by Anthropic for use with Claude models due to its optimization for long documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Voyage AI", "OpenAI", "Cohere", "Google Cloud"),
                                "Voyage AI",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q2",
                                "In the context of embeddings, what does 'NDCG@10' typically measure in a benchmark like MTEB?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The memory usage of a 10-dimensional vector", "The cost of processing 10 tokens", "The quality of document retrieval for the top 10 results", "The speed of vector generation"),
                                "The quality of document retrieval for the top 10 results",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q3",
                                "Which of the following is a key advantage of using API-based embedding models like those from Cohere or OpenAI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No requirement for internet connectivity", "Zero per-token costs", "Absolute control over model weights", "Scalability without infrastructure management"),
                                "Scalability without infrastructure management",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q4",
                                "Scenario: You are building a cross-lingual search engine that needs to handle queries in 50 different languages. Which model is specifically designed for this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("bge-large-en-v1.5", "text-embedding-3-small", "voyage-3", "embed-v3.0 (Cohere)"),
                                "embed-v3.0 (Cohere)",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q5",
                                "What is the approximate storage requirement for 1 million vectors with 3072 dimensions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("~1 GB", "~12 GB", "~4 GB", "~3 GB"),
                                "~12 GB",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q6",
                                "The MTEB benchmark evaluates models across multiple task types. Which task type involves grouping similar documents without pre-defined labels?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrieval", "Classification", "Clustering", "Reranking"),
                                "Clustering",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q7",
                                "If you truncate an OpenAI 'text-embedding-3-large' vector from 3072 to 256 dimensions, what is the expected impact on retrieval performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Performance typically remains high (around 95% of full quality)", "Performance drops by exactly 50%", "Performance drops to 0%", "Performance remains at nearly 100% with no loss"),
                                "Performance typically remains high (around 95% of full quality)",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q8",
                                "Which architectural pattern is used to combine a low-cost, small vector search with a high-accuracy, large vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Brute-force search", "Linear regression", "Monolithic architecture", "Matryoshka Representation Learning (MRL)"),
                                "Matryoshka Representation Learning (MRL)",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q9",
                                "Which component in a RAG pipeline is responsible for finding documents that are 'mathematically close' to the user query?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Vector Database", "The LLM", "The Prompt Template", "The Embedding Model"),
                                "The Vector Database",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q10",
                                "What happens to the 'intent' of a word when it is converted into an embedding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is captured as a spatial relationship within a high-dimensional vector space", "It is converted into a binary yes/no value", "It is lost during tokenization", "It is replaced by a dictionary definition"),
                                "It is captured as a spatial relationship within a high-dimensional vector space",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q11",
                                "A 'dense' vector in embeddings is characterized by:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Containing only integer values", "Having mostly non-zero numerical values", "Having mostly zero values", "Being very short (under 10 dimensions)"),
                                "Having mostly non-zero numerical values",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q12",
                                "Which of the following models is currently considered the most cost-effective for high-volume API-based embedding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("embed-v3.0", "text-embedding-3-small", "text-embedding-3-large", "voyage-3"),
                                "text-embedding-3-small",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q13",
                                "In a search system for legal documents, why might a general-purpose embedding model fail?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses too many tokens", "It is too fast", "It may lack the semantic understanding of complex legal jargon and relationships", "It cannot process PDF files"),
                                "It may lack the semantic understanding of complex legal jargon and relationships",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q14",
                                "How does tokenization affect the embedding process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It removes all punctuation from the document", "It encrypts the text for security", "It breaks text into manageable chunks before vector conversion", "It increases the dimensionality of the vector"),
                                "It breaks text into manageable chunks before vector conversion",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q15",
                                "What is 'Latent Space' in the context of embedding models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The time delay between a query and a result", "A compressed, high-dimensional representation of data where similar items are closer together", "A backup database for failed searches", "The physical hard drive space where vectors are stored"),
                                "A compressed, high-dimensional representation of data where similar items are closer together",
                                "obj_final")
                );
