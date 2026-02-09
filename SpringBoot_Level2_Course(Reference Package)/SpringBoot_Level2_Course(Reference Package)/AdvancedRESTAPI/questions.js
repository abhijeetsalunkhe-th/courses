test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_1",
                                "Which annotation is used to trigger validation in Spring Boot controllers?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Validate", "@Valid", "@Check", "@Verify"),
                                "@Valid",
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_2",
                                "@ControllerAdvice allows you to handle exceptions globally across all controllers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_3",
                                "What is the main difference between PUT and PATCH HTTP methods?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("PUT is for creation, PATCH is for updates", "PUT replaces entire resource, PATCH updates specific fields", "PUT is idempotent, PATCH is not", "No difference, they are interchangeable"),
                                "PUT replaces entire resource, PATCH updates specific fields",
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_4",
                                "Which exception is thrown when Bean Validation fails in Spring Boot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("ValidationException", "MethodArgumentNotValidException", "ConstraintViolationException", "IllegalArgumentException"),
                                "MethodArgumentNotValidException",
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_5",
                                "MapStruct generates mapping code at compile time",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_6",
                                "What annotation is used to ignore a field during mapping in MapStruct?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Ignore", "@Skip", "@Mapping(target = \"field\", ignore = true)", "@Exclude"),
                                "@Mapping(target = \"field\", ignore = true)",
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_7",
                                "Which validation annotation ensures a string is not null, empty, or whitespace?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@NotNull", "@NotEmpty", "@NotBlank", "@Required"),
                                "@NotBlank",
                                "obj_rest_api")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_api_8",
                                "Global exception handlers should return consistent error response formats",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_rest_api")
                );