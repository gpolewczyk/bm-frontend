import React from 'react';
import useModal from 'src/hooks/use-modal';

const Modal: React.FC = ({ children }) => {
  const { closeModal } = useModal();

  const handleClick = () => {
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={handleClick}></div>
      <div className="modal__body">{children}</div>
    </div>
  );
};

export default Modal;
