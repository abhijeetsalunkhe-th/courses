test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_1",
                                "What is the difference between authentication and authorization?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Authentication is 'what can you do', authorization is 'who are you'", "Authentication is 'who are you', authorization is 'what can you do'", "They are the same thing", "Authentication is for APIs, authorization is for web apps"),
                                "Authentication is 'who are you', authorization is 'what can you do'",
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_2",
                                "Adding spring-boot-starter-security automatically secures all endpoints",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_3",
                                "Which annotation enables Spring Security in a configuration class?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@EnableSecurity", "@EnableWebSecurity", "@SecurityEnabled", "@WebSecurity"),
                                "@EnableWebSecurity",
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_4",
                                "What does the permitAll() method do in Spring Security?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Requires authentication", "Allows access to everyone", "Requires admin role", "Denies all access"),
                                "Allows access to everyone",
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_5",
                                "BCryptPasswordEncoder is recommended for encoding passwords in production",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_6",
                                "Which annotation is used for method-level security checks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Secured", "@PreAuthorize", "@RolesAllowed", "All of the above"),
                                "All of the above",
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_7",
                                "What should be disabled for stateless REST APIs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Authentication", "Authorization", "CSRF protection", "Password encoding"),
                                "CSRF protection",
                                "obj_security")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.security_8",
                                "In-memory user authentication is suitable for production applications",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_security")
                );