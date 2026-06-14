# Dynamic JSON-Based Angular Reactive Form
## Overview

This project is a dynamic form generator built using Angular Reactive Forms, where the entire form structure is driven by a JSON configuration file.

Instead of hardcoding form fields, the UI is generated at runtime based on JSON schema. This makes the form highly scalable, reusable, and configurable without code changes.

## Features
- Dynamic form generation using JSON schema
- Support for multiple field types:
    - Text
    - Email
    - Select dropdown
    - Checkbox
- Nested FormGroup support
- Dynamic FormArray support (Add/Remove fields)
- Validator mapping from JSON:
    - required
    - email
    - minlength
    - pattern
- Conditional field rendering using visibleWhen
- Real-time validation error messages

## Core Concept / Approach
1. JSON as Single Source of Truth

All form fields are defined inside a JSON file (form.json), including:

- field name
- type
- label
- validators
- nested structure (group/array)

This allows the form UI to be fully configurable.

2. Dynamic Form Creation (Recursive Logic)

The form is generated using a recursive function:

- If field type is group → creates nested FormGroup
- If field type is array → creates FormArray
- Otherwise → creates FormControl with validators

This enables support for deeply nested structures.

3. Validator Mapping

A helper function maps JSON validators to Angular validators:

Supported mappings:

- required → Validators.required
- email → Validators.email
- minLength → Validators.minLength()
- pattern → Validators.pattern()

This keeps validation logic flexible and schema-driven.

4. Dynamic Rendering in Template

The UI is rendered using Angular template control flow (@for, @if):

- Input fields (text/email)
- Checkbox fields
- Select dropdowns
- Nested groups
- Dynamic arrays

Each field is rendered based on its type in JSON.

5. FormArray Implementation

For dynamic lists (like contacts):

- addContact() → adds new FormGroup into FormArray
- removeContact(index) → removes a specific entry

Each array item behaves as an independent form group.

6. Conditional Fields (Visibility Logic)

Some fields are conditionally displayed using:

- visibleWhen.field
- visibleWhen.value

Field is rendered only when condition matches current form value.

7. Form Submission Flow

On submit:

- Form validity is checked
- If invalid → all fields are marked touched
- If valid → form value is logged in structured JSON format