import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { deleteBookmarkDto } from 'src/types/dto/bookmark.dto';
import { setModalClose } from 'src/store/modal/modal.actions';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import apiClient from 'src/utils/api';

interface Hook {
  mutate: any;
  status: any;
  error: any;
  data: any;
}

const deleteBookmark = async (dto: deleteBookmarkDto) => {
  const response = await apiClient.delete('items', { data: { id: dto.id } });
  const data = await response.data;
  return data;
};

const useDeleteBookmark = (): Hook => {
  const queryClint = useQueryClient();
  const dispatch = useDispatch();
  const mutation = useMutation(deleteBookmark, {
    onSuccess: (_, dto) => {
      queryClint.setQueryData('bookmarks', (cache: BookmarkModel[]) => {
        dispatch(setModalClose());
        const editedCache = cache.filter((item) => item._id !== dto.id);
        return [...editedCache];
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

export default useDeleteBookmark;
