import React, { useState } from "react";

const DynamicForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    school: "",
    degree: "",
    agree: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(JSON.stringify(formData, null, 2));

    // Clear form fields after submission
    setFormData({
      fullName: "",
      email: "",
      school: "",
      degree: "",
      agree: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* Full Name Field */}
      <div className="field">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email Field */}
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          pattern="[^@]+@[^@]+\.[^@]+"
        />
      </div>

      {/* Education Section */}
      <div className="section">
        <h2>Education</h2>

        {/* School Field */}
        <div className="field">
          <label>School Name</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>

        {/* Degree Field */}
        <div className="field">
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Agree Checkbox */}
      <div className="field">
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;