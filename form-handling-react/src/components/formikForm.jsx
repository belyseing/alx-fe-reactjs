import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <Formik>
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema=
      {Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit=
      {(values) => {
        console.log(values);
      }}
      {({ values }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          {/* Displaying Form Values */}
          <div>
            <h3>Form Values:</h3>
            <p>Username: {values.username}</p>
            <p>Email: {values.email}</p>
            <p>Password: {values.password}</p>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
