test.AddQuestion( new Question ("ec_q1",
                                "Which component of Enterprise Claude is responsible for global settings like billing and SSO configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Organization", "Artifacts", "User Profile", "Workspace"),
                                "Organization",
                                "obj_admin_basics")
                );

test.AddQuestion( new Question ("ec_q2",
                                "What is the primary purpose of 'Workspaces' in Enterprise Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase the context window for all users", "To provide isolated environments for different departments or projects", "To enable public sharing of conversations", "To bypass SSO requirements"),
                                "To provide isolated environments for different departments or projects",
                                "obj_admin_basics")
                );

test.AddQuestion( new Question ("ec_q3",
                                "Which provisioning method is recommended for large organizations with over 50 users to automate account management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual Email Invite", "Domain Capture", "SCIM Provisioning", "CSV Upload"),
                                "SCIM Provisioning",
                                "obj_provisioning")
                );

test.AddQuestion( new Question ("ec_q4",
                                "What protocol does Enterprise Claude use to support Single Sign-On (SSO)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LDAP", "SAML 2.0", "FTP", "OAuth 1.0"),
                                "SAML 2.0",
                                "obj_security")
                );

test.AddQuestion( new Question ("ec_q5",
                                "By default, does Anthropic use data from Enterprise Claude customers to train its base models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only if the user clicks 'thumbs up'", "Yes, but only for the first 30 days", "Yes, to improve performance for all users", "No, enterprise data is never used for training by default"),
                                "No, enterprise data is never used for training by default",
                                "obj_security")
                );

test.AddQuestion( new Question ("ec_q6",
                                "Which admin role has the authority to manage users and settings within a specific workspace but not the entire organization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Billing Admin", "Org Admin", "Workspace Admin", "Viewer"),
                                "Workspace Admin",
                                "obj_roles")
                );

test.AddQuestion( new Question ("ec_q7",
                                "What type of audit logs can administrators export from the Admin Console?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User login times and changes to organization-wide settings", "The browser history of every employee", "Private Slack messages", "A list of every word Claude generated"),
                                "User login times and changes to organization-wide settings",
                                "obj_compliance")
                );

test.AddQuestion( new Question ("ec_q8",
                                "Which compliance certification confirms that Anthropic has independent audits for security and confidentiality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PCI-DSS", "FERPA", "ISO 9001", "SOC 2 Type II"),
                                "SOC 2 Type II",
                                "obj_compliance")
                );
