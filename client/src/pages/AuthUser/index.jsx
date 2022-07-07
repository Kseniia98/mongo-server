import { Formik, Field, Form } from 'formik'
import React from 'react'

function AuthPage(props) {
  return (
    <div>
      <h3>Login</h3>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (data) => {
          // send data to server

          // const user = await loginRequest(data);
          // props.setUser(user);
        }}
      >
        {() => {
          return (
            <Form>
              <Field name="email" placeholder="Email" />
              <Field name="password" placeholder="Password" />
              <button>Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AuthPage