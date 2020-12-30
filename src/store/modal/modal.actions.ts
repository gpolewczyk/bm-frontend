import { Dispatch } from 'react';
import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from 'src/store/modal/modal.const';
import { SetModalOpen, SetModalClose } from 'src/store/modal/modal.interfaces';

export const setModalOpen = (payload: string) => (dispatch: Dispatch<SetModalOpen>): void => {
  dispatch({ type: SET_MODAL_OPEN, payload });
};

export const setModalClose = () => (dispatch: Dispatch<SetModalClose>): void => {
  dispatch({ type: SET_MODAL_CLOSE });
};
