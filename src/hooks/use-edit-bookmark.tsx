import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { editBookmarkDto } from 'src/types/dto/bookmark.dto';
import { setModalClose } from 'src/store/modal/modal.actions';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import apiClient from 'src/utils/api';

interface Hook {
  mutate: any;
  status: any;
  error: any;
  data: any;
}

const editBookmark = async (dto: editBookmarkDto) => {
  const response = await apiClient.put('items', dto);
  const data = await response.data;
  return data;
};

const useEditBookmark = (): Hook => {
  const queryClint = useQueryClient();
  const dispatch = useDispatch();
  const mutation = useMutation(editBookmark, {
    onSuccess: (_, dto) => {
      queryClint.setQueryData('bookmarks', (cache: BookmarkModel[]) => {
        dispatch(setModalClose());
        const editedCache = cache.map((item) => {
          return item._id === dto.id ? { ...dto, _id: dto.id } : item;
        });
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

export default useEditBookmark;
