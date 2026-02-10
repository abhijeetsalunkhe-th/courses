// Final Comprehensive Assessment for GenAI Architecture Patterns

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q1",
                                "What is the primary trade-off when choosing between a Monolith and Microservices for a GenAI application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Monoliths are always more expensive than microservices", "Development simplicity versus independent component scalability", "Microservices are only for Python-based applications", "Monoliths cannot connect to external LLM APIs"),
                                "Development simplicity versus independent component scalability",
                                "obj_final_assessment")
                ); // Correct: B

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q2",
                                "Why do Monolith architectures typically offer lower internal latency for GenAI tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They use quantum computing processors", "They do not require a database", "They avoid network hops between decoupled services", "They only work with local models"),
                                "They avoid network hops between decoupled services",
                                "obj_final_assessment")
                ); // Correct: C (Rebalanced)

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q3",
                                "A company is building a large-scale document processing pipeline that requires 30 seconds of AI analysis per page. Which pattern is most resilient for this workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Synchronous Request-Reply", "Client-side only processing", "Direct browser-to-LLM connection", "Event-Driven with background workers"),
                                "Event-Driven with background workers",
                                "obj_final_assessment")
                ); // Correct: D

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q4",
                                "What is a common performance issue associated with Serverless (Function-as-a-Service) GenAI architectures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cold starts increasing the latency of the first request", "The inability to run any JavaScript code", "Functions being limited to only 10 total requests per day", "Serverless functions being unable to access the internet"),
                                "Cold starts increasing the latency of the first request",
                                "obj_final_assessment")
                ); // Correct: A

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q5",
                                "When an AI task takes several minutes, which UX pattern involves the client periodically checking a Job ID for completion?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Streaming", "Polling", "Push notifications", "Blocking"),
                                "Polling",
                                "obj_final_assessment")
                ); // Correct: B

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q6",
                                "Which technology is commonly used to implement 'Streaming' in GenAI web applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FTP (File Transfer Protocol)", "SMTP (Email)", "Server-Sent Events (SSE)", "DNS (Domain Name System)"),
                                "Server-Sent Events (SSE)",
                                "obj_final_assessment")
                ); // Correct: C

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q7",
                                "What is the role of KEDA in a Kubernetes-based GenAI architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt the model weights", "To provide a user interface for the chatbot", "To translate prompts into different languages", "To automatically scale worker pods based on the number of messages in a queue"),
                                "To automatically scale worker pods based on the number of messages in a queue",
                                "obj_final_assessment")
                ); // Correct: D

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q8",
                                "Which caching tool is most frequently used for storing the results of identical LLM input/output pairs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Redis", "Windows Registry", "Browser Cookies", "Excel Spreadsheets"),
                                "Redis",
                                "obj_final_assessment")
                ); // Correct: A

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q9",
                                "Semantic caching relies on which of the following to identify similar queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The alphabetical order of the words", "Vector similarity of prompt embeddings", "The timestamp of the request", "The user's IP address"),
                                "Vector similarity of prompt embeddings",
                                "obj_final_assessment")
                ); // Correct: B

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q10",
                                "How does provider-level 'Prompt Caching' reduce costs for a GenAI application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By deleting the user's prompt after use", "By compressing the prompt into a ZIP file", "By allowing the model to reuse the processing of a static system prompt across many requests", "By forcing the user to pay for their own tokens"),
                                "By allowing the model to reuse the processing of a static system prompt across many requests",
                                "obj_final_assessment")
                ); // Correct: C

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q11",
                                "For a non-real-time task like nightly sentiment analysis of 1 million reviews, which API feature offers the best cost reduction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Premium Tier Support", "High-Priority Streaming", "Custom Model Fine-tuning", "Batch APIs (Async processing with 50% discount)"),
                                "Batch APIs (Async processing with 50% discount)",
                                "obj_final_assessment")
                ); // Correct: D

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q12",
                                "What is the core logic of 'Model Tiering'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Routing simple queries to smaller, cheaper models and complex ones to premium models", "Stacking multiple models on top of each other", "Organizing models by their physical size in the server rack", "Using the same model for every single task to ensure consistency"),
                                "Routing simple queries to smaller, cheaper models and complex ones to premium models",
                                "obj_final_assessment")
                ); // Correct: A

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q13",
                                "Which technique involves dynamically removing unnecessary context or redundant instructions to minimize input token costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Token Mining", "Prompt Pruning", "Prompt Injection", "Model Distillation"),
                                "Prompt Pruning",
                                "obj_final_assessment")
                ); // Correct: B

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q14",
                                "In the context of GenAI architecture, what is the most significant trade-off when using premium models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are only available in certain time zones", "They can only process text in English", "Higher quality output comes with significantly higher costs and latency", "They require the developer to have a PhD"),
                                "Higher quality output comes with significantly higher costs and latency",
                                "obj_final_assessment")
                ); // Correct: C

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q15",
                                "Why is 'Token Budgeting' (setting max_tokens) a critical operational task?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To prevent the AI from becoming too creative", "To ensure the model never uses the same word twice", "To protect the user's privacy", "To control costs and prevent runaway requests from consuming excessive resources"),
                                "To control costs and prevent runaway requests from consuming excessive resources",
                                "obj_final_assessment")
                ); // Correct: D

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q16",
                                "What is the benefit of using decoupled background workers for LLM calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The user-facing API remains responsive regardless of how long the AI takes to respond", "It makes the code run faster on the client's mobile phone", "It avoids the need for a network connection", "It automatically writes the documentation for the project"),
                                "The user-facing API remains responsive regardless of how long the AI takes to respond",
                                "obj_final_assessment")
                ); // Correct: A

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q17",
                                "In a Microservices architecture, why might you use a dedicated service for GPU-based workloads?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because GPUs are cheaper than CPUs", "To scale expensive GPU resources independently from the rest of the application", "To allow the GPU to access the database faster", "To prevent the GPU from getting too hot"),
                                "To scale expensive GPU resources independently from the rest of the application",
                                "obj_final_assessment")
                ); // Correct: B

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q18",
                                "Which asynchronous pattern involves a service pushing a notification to a specific URL once an AI job is finished?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Short Polling", "WebSockets", "Webhooks", "Direct Download"),
                                "Webhooks",
                                "obj_final_assessment")
                ); // Correct: C

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q19",
                                "What is a major challenge of managing a large-scale, event-driven GenAI system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The cost of electricity for the lightbulbs in the office", "The number of users who don't have an email address", "The speed of the user's internet connection", "The complexity of managing distributed state and message broker health"),
                                "The complexity of managing distributed state and message broker health",
                                "obj_final_assessment")
                ); // Correct: D

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q20",
                                "For a startup's first MVP (Minimum Viable Product), which architecture is generally recommended to maximize development speed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Monolith", "Distributed Microservices with Kubernetes", "Global Mesh of Event-Driven Nodes", "Serverless Functions only"),
                                "Monolith",
                                "obj_final_assessment")
                ); // Correct: A

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q21",
                                "How does 'Streaming' affect the user's perception of performance in a chat application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the first token take 10 seconds longer", "It increases the TTFT significantly", "It has no impact on the user's perception", "It provides an immediate start to the response, improving perceived performance"),
                                "It provides an immediate start to the response, improving perceived performance",
                                "obj_final_assessment")
                ); // Correct: D (Rebalanced)

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q22",
                                "In an Event-Driven system, what is the role of the 'Message Broker' (e.g., Kafka or RabbitMQ)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate the embeddings for the prompt", "To display the chat interface to the user", "To act as a reliable buffer that holds events until they can be processed by workers", "To replace the LLM API"),
                                "To act as a reliable buffer that holds events until they can be processed by workers",
                                "obj_final_assessment")
                ); // Correct: C

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q23",
                                "If an AI pipeline is falling behind during a traffic spike, how does an auto-scaler like KEDA respond?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By shutting down the entire system to prevent errors", "By reducing the price of the AI service", "By sending an email to the developer", "By increasing the number of active worker pods based on the queue depth"),
                                "By increasing the number of active worker pods based on the queue depth",
                                "obj_final_assessment")
                ); // Correct: D

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q24",
                                "What is the billing model for 'Serverless' GenAI architectures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pay only for the resources consumed during the exact time the function is executing", "A flat fee of $1,000 per month", "Paying based on the number of developers in the company", "Paying for the size of the source code file"),
                                "Pay only for the resources consumed during the exact time the function is executing",
                                "obj_final_assessment")
                ); // Correct: A

test.AddQuestion( new Question ("com.scorm.genai.arch.final.q25",
                                "According to the course, who is the primary target audience for learning about GenAI Architecture Patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Professional chefs and restaurant owners", "Software architects, full-stack developers, and DevOps/SRE engineers", "History teachers and researchers", "Accountants focused on tax law"),
                                "Software architects, full-stack developers, and DevOps/SRE engineers",
                                "obj_final_assessment")
                ); // Correct: B
