test.AddQuestion( new Question ("ec_final_q1",
                                "Which feature of Claude Enterprise allows users to view and interact with code, documents, and websites in a dedicated side-by-side window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Admin Console", "Artifacts", "SSO", "SCIM"),
                                "Artifacts",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q2",
                                "How does SAML 2.0 benefit an enterprise using Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It increases the speed of the LLM responses", "It allows for centralized authentication and enforcement of MFA", "It reduces the cost per token", "It provides a 200K context window"),
                                "It allows for centralized authentication and enforcement of MFA",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q3",
                                "What is the primary function of SCIM in user management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt data at rest", "To automate user provisioning and de-provisioning based on IdP groups", "To translate prompts into different languages", "To manage billing invoices"),
                                "To automate user provisioning and de-provisioning based on IdP groups",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q4",
                                "Which feature allows an administrator to define a custom message that all users see when they log into Claude for the first time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Organization Policy", "Custom Onboarding Message", "Workspace Logo", "SCIM Protocol"),
                                "Custom Onboarding Message",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q5",
                                "Anthropic's 'No Training on Data' policy for Enterprise customers ensures that:",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model never learns new facts", "Customer data is not used to improve or train Anthropic's base models", "Users don't need to train Claude on their specific business logic", "All data is deleted after 24 hours"),
                                "Customer data is not used to improve or train Anthropic's base models",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q6",
                                "Which compliance standard is met by Anthropic to support healthcare-related use cases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GDPR", "FERPA", "HIPAA", "PCI-DSS"),
                                "HIPAA",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q7",
                                "What is a 'Workspace Admin' specifically allowed to do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Change the organization's billing plan", "Manage users and settings only within their assigned workspace", "Access all workspaces in the organization", "Configure SAML SSO for the entire company"),
                                "Manage users and settings only within their assigned workspace",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q8",
                                "Which encryption standard is used by Anthropic to protect data at rest?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DES", "AES-256", "RSA-1024", "MD5"),
                                "AES-256",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q9",
                                "A company wants to ensure that HR data is never accessible to the Engineering team within Claude. What is the best strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ask employees to be careful", "Create separate Workspaces for HR and Engineering", "Use different passwords for each team", "Rename all HR documents"),
                                "Create separate Workspaces for HR and Engineering",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q10",
                                "What is 'Domain Capture' in the context of user provisioning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Capturing website URLs to process as data", "Automatically adding any user with a verified company email domain to the organization", "Blocking competitors from accessing your website", "Buying all similar-sounding domain names"),
                                "Automatically adding any user with a verified company email domain to the organization",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q11",
                                "What does a 'Viewer' role typically allow a user to do in the Admin Console?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Delete users", "Read-only access to dashboards and usage data", "Change API keys", "Invite new members"),
                                "Read-only access to dashboards and usage data",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q12",
                                "How is 'Encryption in Transit' implemented in Enterprise Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Via physical couriers", "Using TLS 1.3", "Using base64 encoding", "Via private VPNs only"),
                                "Using TLS 1.3",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q13",
                                "Which certification provides an independent audit of security, availability, and confidentiality controls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ISO 9001", "SOC 2 Type II", "Green Seal", "Energy Star"),
                                "SOC 2 Type II",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q14",
                                "What happens when a user is removed from a group in the Identity Provider (IdP) if SCIM is enabled?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Their Claude account is instantly and automatically de-provisioned", "Nothing happens until the admin manually deletes them", "Their password is changed", "They are sent a warning email"),
                                "Their Claude account is instantly and automatically de-provisioned",
                                "obj_final")
                );

test.AddQuestion( new Question ("ec_final_q15",
                                "Why would an organization use Activity Logs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To read private conversations between employees", "To maintain an audit trail of feature access and settings changes for compliance", "To track how many hours employees spend on lunch", "To find out who is the most popular employee"),
                                "To maintain an audit trail of feature access and settings changes for compliance",
                                "obj_final")
                );
