import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from 'state-management/user-info';

export const useSetUserInfo = userInfo => {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  useEffect(() => {
    if (userInfo) {
      const {
        avatar,
        email,
        fullname,
        func,
        id,
        lsOrg,
        memberlevel,
        orgCode,
        orgName,
        orgid,
      } = userInfo;

      setUserInfo({
        avatar,
        email,
        fullname,
        func,
        id,
        lsOrg,
        memberlevel,
        orgCode,
        orgName,
        orgid,
      });
    }
  }, [setUserInfo, userInfo]);
};
