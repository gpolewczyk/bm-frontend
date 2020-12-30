import { SET_USER_LOGIN, SET_USER_LOGOUT } from 'src/store/user/user.const';
import { UserState, UserActions } from 'src/store/user/user.interfaces';

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case SET_USER_LOGIN: {
      return { ...state, isLoggedIn: true, user: action.payload };
    }
    case SET_USER_LOGOUT: {
      return { ...state, isLoggedIn: false, user: null };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
