import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
};

  return (
    <div className="card">
      <h2>Register for Workshop</h2>
       {submitted && (
  <p style={{ color: "green", fontWeight: "bold" }}>
    Successfully Registered!
  </p>
)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <select name="workshop" onChange={handleChange} required>
          <option value="">Select Workshop</option>
          <option>React Basics</option>
          <option>AI Introduction</option>
          <option>Web Development Bootcamp</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;