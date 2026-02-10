test.AddQuestion( new Question ("fr_final_q1",
                                "Which fine-tuning technique allows for training a small number of additional parameters while keeping the base model weights frozen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LoRA (Low-Rank Adaptation)", "Prompt Engineering", "RAG", "Full Fine-Tuning"),
                                "LoRA (Low-Rank Adaptation)",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q2",
                                "In a RAG pipeline, what is the role of a 'Reranker'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train the embedding model", "To translate the query", "To delete old vectors", "To re-evaluate and sort the top retrieved documents for better relevance before passing them to the LLM"),
                                "To re-evaluate and sort the top retrieved documents for better relevance before passing them to the LLM",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q3",
                                "Which approach is most suitable for a task that requires adherence to a very specific, rigid output format like a complex JSON schema?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Few-shot prompting", "Fine-Tuning", "RAG", "Zero-shot prompting"),
                                "Fine-Tuning",
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
                                "What is 'Catastrophic Forgetting'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When a user forgets their password", "When a model loses its general capabilities after being over-trained on a specific dataset", "When a vector database crashes", "When a prompt is too long for the context window"),
                                "When a model loses its general capabilities after being over-trained on a specific dataset",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q6",
                                "Scenario: You need an AI to act as a 'Shakespearean Librarian' with a very specific vocabulary and 16th-century speaking style. Which method is BEST for this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fine-Tuning", "Zero-shot prompting", "Buying a physical book", "RAG"),
                                "Fine-Tuning",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q7",
                                "Which metric is most important for evaluating the 'Retrieval' part of a RAG system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Inference speed", "Accuracy", "Perplexity", "Recall@K"),
                                "Recall@K",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q8",
                                "Why does RAG provide better 'Source Attribution' than Fine-Tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It doesn't; Fine-Tuning is better for citations", "Because Fine-Tuning deletes the source data after training", "Because RAG explicitly retrieves and includes the source text in the prompt", "Because RAG models are smarter"),
                                "Because RAG explicitly retrieves and includes the source text in the prompt",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q9",
                                "Which component is used to convert text into numerical vectors for similarity search in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Transformer", "The Embedding Model", "The Decoder", "The Tokenizer"),
                                "The Embedding Model",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q10",
                                "How does a vector database improve the performance of a RAG system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By allowing for sub-second similarity searches across millions of document chunks", "By encrypting the prompt", "By reducing the electricity usage of the GPU", "By automatically correcting spelling errors in the user query"),
                                "By allowing for sub-second similarity searches across millions of document chunks",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q11",
                                "What is 'Chain-of-Thought' (CoT) prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A way to link multiple LLMs together", "A method for encrypting prompts", "Asking the model to explain its reasoning step-by-step", "A training algorithm for RAG"),
                                "Asking the model to explain its reasoning step-by-step",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q12",
                                "In the Decision Matrix, when should you move from Prompt Engineering to RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When the model needs access to a large, dynamic knowledge base", "When you want to spend more money", "When you want to reduce latency", "When the model doesn't follow instructions"),
                                "When the model needs access to a large, dynamic knowledge base",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q13",
                                "Which method typically requires 'Labeled Data' (prompt/completion pairs)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG", "Prompt Engineering", "Fine-Tuning", "Vector Search"),
                                "Fine-Tuning",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q14",
                                "What is the primary disadvantage of few-shot prompting for very complex tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It modifies the model weights permanently", "It requires a GPU", "It consumes a significant portion of the context window with examples", "It's too slow"),
                                "It consumes a significant portion of the context window with examples",
                                "obj_final")
                );

test.AddQuestion( new Question ("fr_final_q15",
                                "What is the 'Cold Start' problem in Fine-Tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The time it takes for a GPU to warm up", "A bug in the embedding model", "When a model is too cold to process vectors", "The difficulty of starting a fine-tuning project without any existing high-quality labeled data"),
                                "The difficulty of starting a fine-tuning project without any existing high-quality labeled data",
                                "obj_final")
                );
