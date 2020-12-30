import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from 'src/store/modal/modal.const';
import { ModalState, ModalActions } from 'src/store/modal/modal.interfaces';

const initialState: ModalState = {
  isOpen: false,
};

const modalReducer = (state = initialState, action: ModalActions): ModalState => {
  switch (action.type) {
    case SET_MODAL_OPEN: {
      return { ...state, isOpen: action.payload };
    }
    case SET_MODAL_CLOSE: {
      return { ...state, isOpen: false };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
