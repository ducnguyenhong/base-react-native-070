import { useQuery } from 'react-query';
import API from 'utils/API';
import { showToast } from 'utils/helper';

export const useQueryUserInfo = () => {
  return useQuery(
    ['USER_INFO'],
    () =>
      API.request({
        url: '/api/MEMBERS/get-info',
      }).catch(e => {
        showToast(
          'error',
          `Lỗi: ${e.message || 'Không thể lấy thông tin cá nhân'}`,
        );
      }),
    {
      enabled: !!'nickname',
    },
  );
};
