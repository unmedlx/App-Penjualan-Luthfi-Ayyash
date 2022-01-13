import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { API_URL } from "../constants/API";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Spinner } from "react-bootstrap";

function Auth() {
  // State //
  const [state, setState] = useState({
    btnClick: true,
    redirect: false,
  });
  const [loading, setLoading] = useState(false);
  const [message1, setMessage1] = useState(null);

  // FORMIK LOGIN //
  const loginInitialValues = {
    email: "",
    password: "",
  };
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Format Email Salah")
      .required("Email Is Required "),
    password: Yup.string().min(6).required("Password Is Required"),
  });


  

  // LOGIN //
  const login = (data) => {
    
  };

  // RENDER //
  return (
    <>
      {/* SIGN IN FORM */}
      <Formik
          initialValues={loginInitialValues}
          onSubmit={login}
          validationSchema={loginValidationSchema}
        >
          <div className="form-container sign-in-container">
            <Form className="form">
              <h1 className="title subtitle">Sign in</h1>
              <span className="span">login with your account info</span>
              <ErrorMessage name="email" component="span" className="error" />
              <Field
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="input"
              />
              <ErrorMessage name="password" component="span" className="error"/>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="input"
              />
              <Link className="a" to="/forgot-password">
                Forgot your password?
              </Link>
              <button className="button" type="submit">
                Sign In
              </button>
              <h5 className="h5-light mt-3">{message1}</h5>
              {loading && <Spinner animation="border" className="mt-3" />}
            </Form>
          </div>
        </Formik>
    </>
  );
}

export default Auth;
