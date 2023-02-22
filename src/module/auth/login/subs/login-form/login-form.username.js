import Text from 'component/text';
import TextInput from 'component/text-input';
import { useFormikContext } from 'formik';
import { memo, useCallback } from 'react';
import { View } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useSetRecoilState } from 'recoil';
import { focusPasswordAtom } from '../login.recoil';
import { styles } from '../login.style';

const LoginUsername = props => {
  const { isLoading } = props;
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext();
  const setFocusPassword = useSetRecoilState(focusPasswordAtom);

  const onSubmitEditing = useCallback(
    () => setFocusPassword(true),
    [setFocusPassword],
  );

  return (
    <View style={styles.vUsername}>
      <View style={styles.vUsernameInput}>
        <TextInput
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
          placeholder="Tên đăng nhập"
          autoCapitalize="none"
          editable={!isLoading}
          selectTextOnFocus={!isLoading}
          style={values.username ? styles.tiUsernameActive : styles.tiUsername}
          returnKeyType="next"
          onSubmitEditing={onSubmitEditing}
        />
        <FaIcon
          name="user-circle-o"
          size={20}
          style={styles.icUsername}
          color="#999"
        />
      </View>

      {!!errors.username && touched.username && (
        <Text style={styles.tErrorUsername}>{errors.username}</Text>
      )}
    </View>
  );
};

export default memo(LoginUsername);
