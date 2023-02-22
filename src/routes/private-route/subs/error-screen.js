import ErrorScreen from 'component/error-screen';
import Text from 'component/text';
import { memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { accessTokenState } from 'state-management/access-token';
import { styles } from './private-route.style';

const FooterComponentError = memo(() => {
  const queryClient = useQueryClient();
  const setAccessToken = useSetRecoilState(accessTokenState);

  const onRefresh = useCallback(() => {
    // queryClient.resetQueries(['USER_INFO', nickname])
  }, [queryClient]);

  const onReLogin = useCallback(() => {
    setAccessToken('');
  }, [setAccessToken]);

  return (
    <View style={styles.vError}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.toRefresh}
        onPress={onRefresh}>
        <Text style={styles.tRefresh}>Thử lại</Text>
      </TouchableOpacity>
      <Text style={styles.tLabelErrorOr}>hoặc</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.toReLogin}
        onPress={onReLogin}>
        <Text style={styles.tReLogin}>Đăng nhập lại</Text>
      </TouchableOpacity>
    </View>
  );
});

const ErrorScreenRoute = () => {
  return (
    <ErrorScreen
      message="Không thể lấy thông tin cá nhân!"
      FooterComponent={<FooterComponentError />}
    />
  );
};

export default memo(ErrorScreenRoute);
