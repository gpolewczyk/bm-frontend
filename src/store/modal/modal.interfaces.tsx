import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from 'src/store/modal/modal.const';

export interface ModalState {
  isOpen: string | boolean;
}

export interface SetModalOpen {
  type: typeof SET_MODAL_OPEN;
  payload: string;
}

export interface SetModalClose {
  type: typeof SET_MODAL_CLOSE;
}

export type ModalActions = SetModalOpen | SetModalClose;
