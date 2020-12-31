import React from 'react';
import { Formik, Form } from 'formik';
import useLogin from 'src/hooks/use-login';
import useModal from 'src/hooks/use-modal';
import FormSubmit from 'src/components/form/submit';
import FormText from 'src/components/form/text';
import IconClose from 'src/icons/font-awesome/close';
import IconUser from 'src/icons/flat-icons/user';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login: React.FC = () => {
  const { closeModal } = useModal();
  const { mutate, status, error } = useLogin();

  const handleCloseForm = () => {
    closeModal();
  };

  return (
    <div className="login">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form__header">
              <IconUser />
              <button className="form__close" type="button" onClick={handleCloseForm}>
                <IconClose />
              </button>
            </div>
            <div className="form__body">
              <FormText
                id="username"
                name="username"
                label="Username:"
                error={errors.username}
                touched={touched.username}
                type="text"
              />
              <FormText
                id="password"
                name="password"
                label="Password:"
                error={errors.password}
                touched={touched.password}
                type="password"
              />
              <FormSubmit label="log in" disabled={status === 'loading'} />
            </div>
            <div className="form__footer">
              <div className="form__error">{error && error.response && error.response.data.message}</div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
