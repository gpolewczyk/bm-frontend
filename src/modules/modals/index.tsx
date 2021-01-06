import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store.interfaces';
import Modal from 'src/components/modal';
import Add from 'src/modules/bookmarks/add';
import Edit from 'src/modules/bookmarks/edit';
import Login from 'src/modules/login';

const Modals: React.FC = () => {
  const modal = useSelector((state: RootState) => state.modal);

  if (modal.isOpen === 'add') {
    return (
      <Modal>
        <Add />
      </Modal>
    );
  }

  if (modal.isOpen === 'edit') {
    return (
      <Modal>
        <Edit />
      </Modal>
    );
  }

  if (modal.isOpen === 'login') {
    return (
      <Modal>
        <Login />
      </Modal>
    );
  }

  return null;
};

export default Modals;
