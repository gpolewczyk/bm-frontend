import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { createBookmarkDto } from 'src/types/dto/bookmark.dto';
import { setModalClose } from 'src/store/modal/modal.actions';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import apiClient from 'src/utils/api';

interface Hook {
  mutate: any;
  status: any;
  error: any;
  data: any;
}

const addBookmark = async (dto: createBookmarkDto) => {
  const response = await apiClient.post('items', dto);
  const data = await response.data;
  return data;
};

const useAddBookmark = (): Hook => {
  const queryClint = useQueryClient();
  const dispatch = useDispatch();
  const mutation = useMutation(addBookmark, {
    onSuccess: (response) => {
      queryClint.setQueryData('bookmarks', (cache: BookmarkModel[]) => {
        dispatch(setModalClose());
        return [...cache, { ...response }];
      });
    },
  });

  return {
    mutate: mutation.mutate,
    status: mutation.status,
    error: mutation.error,
    data: mutation.data,
  };
};

export default useAddBookmark;
