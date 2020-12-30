import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store.interfaces';
import useModal from 'src/hooks/use-modal';

const Nav: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { openModal } = useModal();

  const handleLogin = () => {
    openModal('login');
  };

  const handleAdd = () => {
    openModal('add');
  };

  return (
    <div className="nav">
      {!isLoggedIn ? (
        <button className="nav__btn btn" type="button" onClick={handleLogin}>
          Log in
        </button>
      ) : (
        <>
          <button className="nav__btn btn" type="button" onClick={handleAdd}>
            Add new
          </button>
          <button className="nav__btn btn" type="button" disabled={true}>
            Logged in
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
