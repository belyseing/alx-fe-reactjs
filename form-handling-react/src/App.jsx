import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";

function App() {
  return (
    <div className="App">
      <h1>User Registration with Formik</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
