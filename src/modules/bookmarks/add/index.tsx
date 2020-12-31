import React from 'react';
import { Formik, Form } from 'formik';
import useAddBookmark from 'src/hooks/use-add-bookmark';
import useModal from 'src/hooks/use-modal';
import FormSubmit from 'src/components/form/submit';
import FormText from 'src/components/form/text';
import IconClose from 'src/icons/font-awesome/close';
import IconAdd from 'src/icons/flat-icons/add';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store.interfaces';

const validationSchema = Yup.object().shape({
  label: Yup.string().required(),
  url: Yup.string(),
});

const Add: React.FC = () => {
  const { closeModal } = useModal();
  const { mutate, status, error } = useAddBookmark();
  const { selected } = useSelector((state: RootState) => state.bookmarks);

  const handleCloseForm = () => {
    closeModal();
  };

  return (
    <div className="bookmark__add animate slideBottom">
      <Formik
        initialValues={{ label: '', url: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate({ ...values, parent: selected })}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form__header">
              <IconAdd />
              <button className="form__close" type="button" onClick={handleCloseForm}>
                <IconClose />
              </button>
            </div>
            <div className="form__body">
              <FormText
                id="label"
                name="label"
                label="Bookmark label:"
                error={errors.label}
                touched={touched.label}
                type="text"
              />
              <FormText
                id="url"
                name="url"
                label="Bookmark url:"
                error={errors.url}
                touched={touched.url}
                type="text"
              />
              <FormSubmit label="Save" disabled={status === 'loading'} />
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

export default Add;
