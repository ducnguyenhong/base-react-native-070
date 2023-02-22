import Text from 'component/text';
import { useFormikContext } from 'formik';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../login.style';

const LoginSubmit = props => {
  const { isLoading } = props;
  const { handleSubmit } = useFormikContext();

  return (
    <>
      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.8}
        style={isLoading ? styles.toWaitingLogin : styles.toLogin}
        disabled={isLoading}>
        <Text style={styles.tLogin}>
          {isLoading ? 'Vui lòng chờ...' : 'Đăng nhập'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default memo(LoginSubmit);
