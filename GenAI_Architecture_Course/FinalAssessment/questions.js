// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("q1",
                                "Regarding GenAIArchitecture: What is the purpose of Cost Optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Real-time chat, writing assistance", "Prompt optimization: Shorter prompts cost less - remove unnecessary instructions", "Variable (cold starts)", "Scaling Strategies"),
                                "Prompt optimization: Shorter prompts cost less - remove unnecessary instructions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "From GenAIArchitecture: How does Cost Optimization work?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Queue-Based Processing", "Event-driven: Best for document processing pipelines, async RAG indexing, multi-step wo...", "Batching: Use batch APIs for non-real-time processing (often 50% cheaper)", "Vertical"),
                                "Batching: Use batch APIs for non-real-time processing (often 50% cheaper)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "Regarding GenAIArchitecture: What is a key feature of Cost Optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model caching: Cache common responses with Redis/Memcached", "Shared system prompts across requests", "Webhook: Notify caller when result is ready", "Self-hosted models: For high-volume workloads, self-hosting can be cheaper than API calls"),
                                "Self-hosted models: For high-volume workloads, self-hosting can be cheaper than API calls",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "In GenAIArchitecture: Which statement about Monolith: Low (co-located) is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Monolith: Low (co-located)", "Hybrid: Optimized per component", "Event-Driven: Async (variable)", "Prompt optimization: Shorter prompts cost less - remove unnecessary instructions"),
                                "Monolith: Low (co-located)",
                                "obj_final_assessment")
                );