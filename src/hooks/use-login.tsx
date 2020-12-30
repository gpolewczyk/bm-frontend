import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { decodeToken } from 'src/utils/jwt';
import { sessionSet } from 'src/utils/storage';
import { setModalClose } from 'src/store/modal/modal.actions';
import { setUserLogin } from 'src/store/user/user.actions';
import { UserLoginDto } from 'src/types/dto/user.dto';
import apiClient from 'src/utils/api';

interface Hook {
  mutate: any;
  status: any;
  error: any;
}

const login = async (dto: UserLoginDto) => {
  const response = await apiClient.post('users/login', dto);
  const data = await response.data;
  return data;
};

const useLogin = (): Hook => {
  const dispatch = useDispatch();
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      sessionSet('token', data.access_token);
      dispatch(setUserLogin(decodeToken(data.access_token)));
      dispatch(setModalClose());
    },
  });

  return {
    mutate: mutation.mutate,
    status: mutation.status,
    error: mutation.error,
  };
};

export default useLogin;
