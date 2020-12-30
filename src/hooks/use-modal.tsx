import { useDispatch } from 'react-redux';
import { setModalClose, setModalOpen } from 'src/store/modal/modal.actions';

interface Hook {
  openModal: (type: string) => void;
  closeModal: () => void;
}

const useModal = (): Hook => {
  const dispatch = useDispatch();

  const openModal = (type: string) => {
    dispatch(setModalOpen(type));
  };

  const closeModal = () => {
    dispatch(setModalClose());
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
