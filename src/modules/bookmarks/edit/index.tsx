import React from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store.interfaces';
import useDeleteBookmark from 'src/hooks/use-delete-bookmark';
import useEditBookmark from 'src/hooks/use-edit-bookmark';
import useGetBookmark from 'src/hooks/use-get-bookmark';
import useModal from 'src/hooks/use-modal';
import FormDelete from 'src/components/form/delete';
import FormSubmit from 'src/components/form/submit';
import FormText from 'src/components/form/text';
import IconClose from 'src/icons/font-awesome/close';
import IconEdit from 'src/icons/flat-icons/edit';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  label: Yup.string().required(),
  url: Yup.string(),
});

const Edit: React.FC = () => {
  const { closeModal } = useModal();
  const deleteBookmark = useDeleteBookmark();
  const editBookmark = useEditBookmark();
  const { edited } = useSelector((state: RootState) => state.bookmarks);
  const { data } = useGetBookmark(edited);

  const handleCloseForm = () => {
    closeModal();
  };

  const handleDelete = () => {
    deleteBookmark.mutate({ id: edited });
  };

  return (
    <div className="bookmark__edit animate slideBottom">
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: edited,
          parent: (data?.parent as string) || '',
          label: (data?.label as string) || '',
          url: (data?.url as string) || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => editBookmark.mutate({ ...values })}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form__header">
              <IconEdit />
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
              <FormSubmit label="Edit" disabled={editBookmark.status === 'loading'} />
              <FormDelete label="Delete" disabled={editBookmark.status === 'loading'} onClick={handleDelete} />
            </div>
            <div className="form__footer">
              <div className="form__error">
                {deleteBookmark.error && deleteBookmark.error.response && deleteBookmark.error.response.data.message}
                {editBookmark.error && editBookmark.error.response && editBookmark.error.response.data.message}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Edit;
