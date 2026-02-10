test.AddQuestion( new Question ("fr_final_q1",
                                "Which method involves modifying the internal parameters (weights) of a pre-trained model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Engineering", "RAG", "Fine-Tuning", "Vector Ingestion"),
                                "Fine-Tuning",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q2",
                                "What is the primary goal of the 'Retrieval' step in a RAG pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train the model on new data", "To find the most relevant document snippets from an external database", "To compress the model for deployment", "To translate the user query into SQL"),
                                "To find the most relevant document snippets from an external database",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q3",
                                "Which approach has the lowest 'Time to Deploy' for a simple task?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fine-Tuning", "RAG", "Prompt Engineering", "Custom Model Training"),
                                "Prompt Engineering",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q4",
                                "In RAG, what is 'Chunking'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The process of deleting old data", "Breaking large documents into smaller pieces for better retrieval", "Training a model in small batches", "Merging multiple LLMs together"),
                                "Breaking large documents into smaller pieces for better retrieval",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q5",
                                "What is 'LoRA' in the context of Fine-Tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A type of vector database", "A parameter-efficient fine-tuning technique", "A new LLM from Anthropic", "A method for prompt compression"),
                                "A parameter-efficient fine-tuning technique",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q6",
                                "Scenario: You need an AI to act as a 'Shakespearean Librarian' with a very specific vocabulary and 16th-century speaking style. Which method is BEST for this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG", "Fine-Tuning", "Zero-shot prompting", "Buying a physical book"),
                                "Fine-Tuning",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q7",
                                "What is a major risk when fine-tuning a model on a very narrow dataset?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased context window", "Catastrophic forgetting of general knowledge", "The model becomes too fast", "Lower per-token cost"),
                                "Catastrophic forgetting of general knowledge",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q8",
                                "Why does RAG provide better 'Source Attribution' than Fine-Tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because RAG models are smarter", "Because RAG explicitly retrieves and includes the source text in the prompt", "Because Fine-Tuning deletes the source data after training", "It doesn't; Fine-Tuning is better for citations"),
                                "Because RAG explicitly retrieves and includes the source text in the prompt",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q9",
                                "Which component is used to convert text into numerical vectors for similarity search in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Tokenizer", "The Embedding Model", "The Transformer", "The Decoder"),
                                "The Embedding Model",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q10",
                                "How does a vector database improve the performance of a RAG system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By encrypting the prompt", "By allowing for sub-second similarity searches across millions of document chunks", "By automatically correcting spelling errors in the user query", "By reducing the electricity usage of the GPU"),
                                "By allowing for sub-second similarity searches across millions of document chunks",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q11",
                                "What is 'Chain-of-Thought' (CoT) prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A way to link multiple LLMs together", "Asking the model to explain its reasoning step-by-step", "A training algorithm for RAG", "A method for encrypting prompts"),
                                "Asking the model to explain its reasoning step-by-step",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q12",
                                "In the Decision Matrix, when should you move from Prompt Engineering to RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When the model doesn't follow instructions", "When the model needs access to a large, dynamic knowledge base", "When you want to spend more money", "When you want to reduce latency"),
                                "When the model needs access to a large, dynamic knowledge base",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q13",
                                "Which method typically requires 'Labeled Data' (prompt/completion pairs)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Engineering", "RAG", "Fine-Tuning", "Vector Search"),
                                "Fine-Tuning",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q14",
                                "What is the primary disadvantage of few-shot prompting for very complex tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too slow", "It consumes a significant portion of the context window with examples", "It modifies the model weights permanently", "It requires a GPU"),
                                "It consumes a significant portion of the context window with examples",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q15",
                                "A 'Hybrid' system uses Fine-Tuning for style and RAG for knowledge. What is a key benefit of this setup?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is the cheapest possible solution", "It leverages the strengths of both internalization and factual grounding", "It eliminates the need for an LLM", "It works without embeddings"),
                                "It leverages the strengths of both internalization and factual grounding",
                                "obj_final")
                );
