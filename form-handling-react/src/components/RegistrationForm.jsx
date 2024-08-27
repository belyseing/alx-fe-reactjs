import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
              value={values.username}
            />
            {errors.username && <div>{errors.username}</div>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
