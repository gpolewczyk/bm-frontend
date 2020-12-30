import { useQuery } from 'react-query';
import apiClient from 'src/utils/api';

interface Hook {
  data: any;
  status: any;
  error: any;
}

const getBookmarks = async () => {
  const response = await apiClient.get('items');
  const data = await response.data;
  return data;
};

const useGetBookmarks = (): Hook => {
  const { data, status, error } = useQuery('bookmarks', getBookmarks);

  return {
    data,
    status,
    error,
  };
};

export default useGetBookmarks;
