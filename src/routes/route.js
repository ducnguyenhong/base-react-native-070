import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from 'state-management/access-token';
import API from 'utils/API';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const AppRoute = () => {
  const accessToken = useRecoilValue(accessTokenState);

  API.accessToken = accessToken;

  useEffect(() => {
    // if (accessToken) {
    //   const userData = jwtDecode(accessToken);
    //   const expiredAt = userData?.exp;
    //   if (dayjs(expiredAt).valueOf() < dayjs().valueOf() / 1000) {
    //     modalExpiredRef?.current.showModal();
    //   }
    // }
  }, [accessToken]);

  return (
    <NavigationContainer>
      {/* <ModalExpiredToken ref={modalExpiredRef} />
      <ModalNoInternet ref={modalNoInternetRef} /> */}
      {accessToken ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
};

export default AppRoute;
