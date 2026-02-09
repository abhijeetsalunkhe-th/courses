test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_1",
                                "Which database configuration property should be set to 'validate' in production?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("spring.jpa.show-sql", "spring.jpa.hibernate.ddl-auto", "spring.datasource.url", "spring.jpa.properties.hibernate.dialect"),
                                "spring.jpa.hibernate.ddl-auto",
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_2",
                                "Spring Profiles allow different configurations for different environments",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_3",
                                "What is the correct naming convention for Flyway migration files?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("migration_1_create_table.sql", "V1__create_table.sql", "1_create_table.sql", "create_table_v1.sql"),
                                "V1__create_table.sql",
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_4",
                                "Which annotation is used for native SQL queries in Spring Data JPA?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@NativeQuery", "@Query(nativeQuery = true)", "@SqlQuery", "@RawSQL"),
                                "@Query(nativeQuery = true)",
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_5",
                                "JPQL queries are database-independent",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_6",
                                "Which command line argument activates a Spring profile?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("--profile=prod", "--spring.profiles.active=prod", "--environment=prod", "--config.profile=prod"),
                                "--spring.profiles.active=prod",
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_7",
                                "What is the main benefit of using connection pooling in production?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces memory usage", "Improves database performance and resource management", "Simplifies configuration", "Enables automatic backups"),
                                "Improves database performance and resource management",
                                "obj_production_data")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.prod_data_8",
                                "Flyway migration files should never be modified once applied to any environment",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_data")
                );