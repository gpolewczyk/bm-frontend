import { useQuery } from 'react-query';
import apiClient from 'src/utils/api';

interface Hook {
  data: any;
  status: any;
  error: any;
}

const getBookmark = async (id: string) => {
  const response = await apiClient.get('items/' + id);
  const data = await response.data;
  return data;
};

const useGetBookmarks = (id: string): Hook => {
  const { data, status, error } = useQuery(['bookmark', id], () => getBookmark(id));

  return {
    data,
    status,
    error,
  };
};

export default useGetBookmarks;
