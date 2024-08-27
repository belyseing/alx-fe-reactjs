import { Formik } from "formik";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({});
    // Validate form fields
    const validationErrors = {};
    if (!username) validationErrors.username = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    // If there are validation errors, set the errors state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate API call
    console.log("User Registered:", { username, email, password });
  };

  return (
    <form onSubmit={formk.handlesubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={Formik.handlechange}
          value={Formik.values.username}
        />
        {Formik.errors.username && <div>{Formik.errors.username}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={Formik.handlechange}
          value={Formik.value.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={Formik.handlechange}
          value={Formik.value.password}
        />
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default RegistrationForm;
