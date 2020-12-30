import React from 'react';
import { Field } from 'formik';

interface ComponentProps {
  id: string;
  name: string;
  label: string;
  error: string;
  touched: boolean;
  type: string;
}

const Text: React.FC<ComponentProps> = ({ id, name, label, error, touched, type }) => {
  const classNameWithError = error && touched ? 'form__field form__field--error' : 'form__field';

  return (
    <div className="form__row">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <Field className={classNameWithError} id={id} name={name} type={type} autoComplete="off" />
      {error && touched && <span className="form__error">{error}</span>}
    </div>
  );
};

export default Text;
