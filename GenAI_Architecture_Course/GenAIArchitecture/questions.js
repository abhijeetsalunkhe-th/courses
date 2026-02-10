test.AddQuestion( new Question ("q1",
                                "Which of the following is true regarding Pattern Selection Guide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Medium", "Monolith: Best for MVPs, small teams, simple chatbots, prototypes", "Auto-scale Celery/RQ workers based on queue depth", "Batching: Use batch APIs for non-real-time processing (often 50% cheaper)"),
                                "Monolith: Best for MVPs, small teams, simple chatbots, prototypes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "How is Pattern Selection Guide best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pay-per-use", "Streaming: Stream tokens as they are generated", "Event-driven: Best for document processing pipelines, async RAG indexing, multi-step wo...", "Serverless"),
                                "Event-driven: Best for document processing pipelines, async RAG indexing, multi-step wo...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is an important aspect of Pattern Selection Guide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Serverless: Best for variable traffic, webhook handlers, scheduled tasks, cost-sensitiv...", "Stream tokens as they are generated", "Submit request, poll for result", "Event-driven: Best for document processing pipelines, async RAG indexing, multi-step wo..."),
                                "Serverless: Best for variable traffic, webhook handlers, scheduled tasks, cost-sensitiv...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What role does Pattern Selection Guide play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Serverless", "Caching Strategy", "Streaming: Stream tokens as they are generated", "Microservices: Best for large teams, different scaling needs per component, polyglot en..."),
                                "Microservices: Best for large teams, different scaling needs per component, polyglot en...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which of the following best describes Cost Optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Microservices: Best for large teams, different scaling needs per component, polyglot en...", "Microservices", "Model tiering: Route simple queries to cheaper models (GPT-4o-mini, Haiku) and complex ...", "Horizontal per service"),
                                "Model tiering: Route simple queries to cheaper models (GPT-4o-mini, Haiku) and complex ...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which statement about Cost Optimization is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batching: Use batch APIs for non-real-time processing (often 50% cheaper)", "Response caching: Cache frequent queries - can reduce costs by 30-60%", "Variable (cold starts)", "Request-Reply: Submit request, poll for result"),
                                "Response caching: Cache frequent queries - can reduce costs by 30-60%",
                                "obj_module_1")
                );