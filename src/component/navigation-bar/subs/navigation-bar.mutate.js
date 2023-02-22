import { useMutation, useQueryClient } from 'react-query';
import API from 'utils/API';

export const useMutationResetNoti = () => {
  const queryClient = useQueryClient();

  return useMutation(
    () =>
      API.request({
        method: 'POST',
        url: 'api/users/notifications/reset',
      }),
    {
      onSuccess: () => queryClient.refetchQueries(['NUMBER_OF_NOTI_UNSEEN']),
    },
  );
};
