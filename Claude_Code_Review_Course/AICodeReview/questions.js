test.AddQuestion( new Question ("q1",
                                "What role does Safety and Verification play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unclear or inconsistent naming", "Using Claude Code for PR Reviews", "Dry run mode: Preview changes before applying them", "Replace Pattern"),
                                "Dry run mode: Preview changes before applying them",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following is true regarding Safety and Verification?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Replace Pattern: Deprecated API or outdated pattern", "Educate developers: Explain why changes are suggested, not just what to change", "Review Output Structure", "Test integration: Run tests after refactoring to verify correctness"),
                                "Test integration: Run tests after refactoring to verify correctness",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What does Safety and Verification involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Git integration: Changes are staged but not committed, allowing manual review", "Code in wrong file or module", "Claude Code integrates directly with your Git workflow to review pull requests:", "Configuring Review Hooks"),
                                "Git integration: Changes are staged but not committed, allowing manual review",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is a key characteristic of Safety and Verification?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Extract Method", "Rollback: Use git to easily revert if refactoring introduces issues", "Replace Pattern: Deprecated API or outdated pattern", "Dry run mode: Preview changes before applying them"),
                                "Rollback: Use git to easily revert if refactoring introduces issues",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary purpose of Why AI-Assisted Code Review??",
                                QUESTION_TYPE_CHOICE,
                                new Array("Speed up reviews: Provide instant feedback so human reviewers focus on design decisions", "Claude Code can perform complex refactoring operations that understand code semantics, ...", "Refactoring with Claude Code", "Catch bugs early: Detect null pointer issues, race conditions, and logic errors"),
                                "Catch bugs early: Detect null pointer issues, race conditions, and logic errors",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "How is Why AI-Assisted Code Review? best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Codebase-Wide Transformations", "Rename Symbol", "Enforce consistency: Ensure naming conventions, patterns, and architectural standards", "Replace Pattern"),
                                "Enforce consistency: Ensure naming conventions, patterns, and architectural standards",
                                "obj_module_1")
                );