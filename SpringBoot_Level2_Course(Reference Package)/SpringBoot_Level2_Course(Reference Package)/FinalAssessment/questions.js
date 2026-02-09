// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Production Data Access, Advanced REST API, Spring Security, Integration & Communication, Testing & Debugging

// Production Data Access (5 questions)
test.AddQuestion( new Question ("com.scorm.springboot.final.prod_1",
                                "Which annotation is used to specify different configuration properties for different environments in Spring Boot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Profile", "@Environment", "@Configuration", "@PropertySource"),
                                "@Profile",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.prod_2",
                                "What is the correct way to configure a PostgreSQL database connection in application-prod.properties?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("spring.datasource.url=jdbc:postgresql://localhost:5432/mydb", "spring.database.url=postgresql://localhost:5432/mydb", "spring.jpa.database.url=jdbc:postgresql://localhost:5432/mydb", "database.connection.url=jdbc:postgresql://localhost:5432/mydb"),
                                "spring.datasource.url=jdbc:postgresql://localhost:5432/mydb",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.prod_3",
                                "Which tool is commonly used for database schema migrations in Spring Boot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Hibernate", "Flyway", "JPA", "JDBC"),
                                "Flyway",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.prod_4",
                                "What annotation is used to create custom query methods in Spring Data JPA?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Query", "@CustomQuery", "@NativeQuery", "@SqlQuery"),
                                "@Query",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.prod_5",
                                "Which property controls the Hibernate DDL generation strategy?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("spring.jpa.hibernate.ddl-auto", "spring.jpa.database.ddl", "hibernate.ddl.generation", "spring.datasource.ddl-mode"),
                                "spring.jpa.hibernate.ddl-auto",
                                "obj_final_assessment")
                );

// Advanced REST API (5 questions)
test.AddQuestion( new Question ("com.scorm.springboot.final.api_1",
                                "Which annotation is used to validate that an email field contains a valid email format?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Email", "@Valid", "@Pattern", "@Format"),
                                "@Email",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.api_2",
                                "What annotation is used to handle exceptions globally across all controllers?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@ExceptionHandler", "@ControllerAdvice", "@GlobalExceptionHandler", "@RestControllerAdvice"),
                                "@RestControllerAdvice",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.api_3",
                                "Which HTTP status code should be returned when a resource is successfully created?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("200 OK", "201 Created", "202 Accepted", "204 No Content"),
                                "201 Created",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.api_4",
                                "What is the purpose of DTO (Data Transfer Object) classes?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To store data in the database", "To transfer data between layers and external systems", "To handle HTTP requests", "To manage application configuration"),
                                "To transfer data between layers and external systems",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.api_5",
                                "Which annotation validates that a string field has a minimum and maximum length?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Length", "@Size", "@Range", "@MinMax"),
                                "@Size",
                                "obj_final_assessment")
                );

// Spring Security (5 questions)
test.AddQuestion( new Question ("com.scorm.springboot.final.sec_1",
                                "Which class is the main configuration class for Spring Security?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("SecurityConfiguration", "WebSecurityConfigurerAdapter", "SecurityFilterChain", "SecurityConfig"),
                                "SecurityFilterChain",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.sec_2",
                                "What annotation is used to specify method-level security requirements?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Secured", "@PreAuthorize", "@RolesAllowed", "All of the above"),
                                "All of the above",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.sec_3",
                                "Which interface should be implemented to create a custom UserDetailsService?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("UserService", "AuthenticationProvider", "UserDetailsService", "SecurityService"),
                                "UserDetailsService",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.sec_4",
                                "What is the purpose of CSRF protection in Spring Security?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt passwords", "To prevent Cross-Site Request Forgery attacks", "To validate user input", "To manage user sessions"),
                                "To prevent Cross-Site Request Forgery attacks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.sec_5",
                                "Which annotation is used to access the currently authenticated user in a controller method?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@CurrentUser", "@AuthenticationPrincipal", "@Principal", "@User"),
                                "@AuthenticationPrincipal",
                                "obj_final_assessment")
                );

// Integration and Communication (5 questions)
test.AddQuestion( new Question ("com.scorm.springboot.final.int_1",
                                "Which Spring class is the modern replacement for RestTemplate?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("HttpClient", "WebClient", "RestClient", "ApiClient"),
                                "WebClient",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.int_2",
                                "What is the main advantage of asynchronous communication over synchronous communication?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Simpler implementation", "Better error handling", "Non-blocking operations and better scalability", "Faster response times"),
                                "Non-blocking operations and better scalability",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.int_3",
                                "Which annotation is used to make a method execute asynchronously in Spring?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Async", "@Asynchronous", "@NonBlocking", "@Background"),
                                "@Async",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.int_4",
                                "What should you do when an external API call fails in a microservices architecture?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the error", "Implement retry logic and circuit breaker patterns", "Return null", "Throw an exception immediately"),
                                "Implement retry logic and circuit breaker patterns",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.int_5",
                                "Which HTTP method should be used for retrieving data from an external API?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("POST", "PUT", "GET", "DELETE"),
                                "GET",
                                "obj_final_assessment")
                );

// Testing and Debugging (5 questions)
test.AddQuestion( new Question ("com.scorm.springboot.final.test_1",
                                "Which annotation is used to test only the JPA layer in Spring Boot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@SpringBootTest", "@WebMvcTest", "@DataJpaTest", "@IntegrationTest"),
                                "@DataJpaTest",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.test_2",
                                "What is the purpose of MockMvc in Spring Boot testing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To mock database connections", "To simulate HTTP requests without starting a server", "To create test data", "To mock external services"),
                                "To simulate HTTP requests without starting a server",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.test_3",
                                "Which annotation is used to mock Spring beans in tests?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Mock", "@MockBean", "@Spy", "@InjectMocks"),
                                "@MockBean",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.test_4",
                                "What Spring Boot feature provides production-ready monitoring endpoints?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring Boot DevTools", "Spring Boot Actuator", "Spring Boot Monitor", "Spring Boot Admin"),
                                "Spring Boot Actuator",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.springboot.final.test_5",
                                "Which actuator endpoint provides information about the application's health?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("/actuator/info", "/actuator/health", "/actuator/status", "/actuator/metrics"),
                                "/actuator/health",
                                "obj_final_assessment")
                );