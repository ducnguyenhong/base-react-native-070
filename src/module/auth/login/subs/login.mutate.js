import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { accessTokenState } from 'state-management/access-token';
import API from 'utils/API';

export const useMutationLogin = onShowModalError => {
  const setAccessToken = useSetRecoilState(accessTokenState);

  const { mutate, isLoading, error } = useMutation(
    params => {
      const config = {
        method: 'POST',
        url: '/api/MEMBERS/login',
        headers: {
          // Authorization: sessionId,
        },
        params,
      };
      return API.request(config);
    },
    {
      onSuccess: async response => setAccessToken(response),
    },
  );

  return { mutate, isLoading, error };
};
