# Deploy link : https://dynamic-form-builder-tan.vercel.app/
# Dynamic-Form-Builder
This project is a Dynamic Form Builder built using React. It generates a form dynamically based on a JSON-like structure, supporting various field types such as text inputs, email inputs, checkboxes, and nested sections (e.g., Education, Degree). The form is fully configurable and uses React's state management to handle user input and form submission.
#Features
Dynamic Form Generation:
The form is generated dynamically based on a predefined structure (no hardcoding of fields).
Supports nested sections (e.g., Education, Work Experience).
Field Types:
Text inputs
Email inputs (with validation)
Checkboxes
Nested sections (recursive rendering)
Form Submission:
Captures form data in a state object.
Displays the submitted data in an alert and clears the form after submission.
Validation:
Required fields are validated.
Email fields use regex-based validation.
State Management:
Uses React's useState hook to manage form data.
# How It Works
Form Structure:
The form structure is defined in the DynamicForm.jsx file as a JavaScript object (formData).
Each field has a type, name, label, and optional required and validation properties.
Dynamic Rendering:
The form fields are rendered dynamically using a single handleChange function.
Nested sections are handled by recursively rendering fields within the parent section.
State Updates:
The handleChange function updates the formData state whenever a user interacts with the form.
For checkboxes, it uses the checked property; for other inputs, it uses the value property.
Form Submission:
When the form is submitted, the handleSubmit function logs the form data and displays it in an alert.
After submission, the form fields are cleared by resetting the formData state.
# How to Run the Project
Clone the Repository:
bash
Copy
git clone https://github.com/your-username/dynamic-form-builder.git
cd dynamic-form-builder
Install Dependencies:
bash
Copy
npm install
Start the Development Server:
bash
Copy
npm run dev
Open the Application:
Visit http://localhost:5173 in your browser to view the form.
# Code Structure
Copy
dynamic-form-builder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── DynamicForm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── vite.config.js
└── README.md
