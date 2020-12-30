import jwt_decode from 'jwt-decode';
import { UserModel } from 'src/store/user/user.interfaces';

export const decodeToken = (token: string): UserModel => {
  const decoded: UserModel = jwt_decode(token);

  return {
    id: decoded.id,
    email: decoded.email,
    username: decoded.username,
    token: token,
  };
};
