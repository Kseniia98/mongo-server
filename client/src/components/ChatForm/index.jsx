import { Field, Form, Formik } from 'formik';
import React from 'react'

function ChatForm(props) {
  const initialData = {
    author_id: '',
    body: '',
  };

  return (
    <Formik
        initialValues={initialData}
        onSubmit={props.onSubmit}
      >
        {() => {
          return (
            <Form>
              <Field type="text" name="author_id" />
              <Field type="text" name="body" />

              <button type='submit'></button>
            </Form>
          );
        }}
      </Formik>
  )
}

export default ChatForm