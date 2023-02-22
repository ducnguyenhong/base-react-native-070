import Text from 'component/text';
import TextInput from 'component/text-input';
import { useFormikContext } from 'formik';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useRecoilValue } from 'recoil';
import { focusPasswordAtom } from '../login.recoil';
import { styles } from '../login.style';

const LoginPassword = props => {
  const { isLoading } = props;
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef();
  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormikContext();

  const focusPassword = useRecoilValue(focusPasswordAtom);

  const onChangeShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  );

  useEffect(() => {
    if (focusPassword) {
      passwordRef.current?.focus();
    }
  }, [focusPassword]);

  return (
    <View style={styles.vPassword}>
      <View style={styles.vPasswordInput}>
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          placeholder="Mật khẩu"
          ref={passwordRef}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          editable={!isLoading}
          selectTextOnFocus={!isLoading}
          value={values.password}
          style={values.password ? styles.tiPasswordActive : styles.tiPassword}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      </View>
      <FaIcon name="lock" size={22} style={styles.icPassword} color="#999" />
      <TouchableOpacity
        style={styles.toShowPassword}
        activeOpacity={0.8}
        onPress={onChangeShowPassword}>
        <FaIcon
          name={showPassword ? 'eye' : 'eye-slash'}
          size={22}
          style={styles.imgIconShowPassword}
          color="#999"
        />
      </TouchableOpacity>

      {!!errors.password && touched.password && (
        <Text style={styles.tErrorPassword}>{errors.password}</Text>
      )}
    </View>
  );
};

export default memo(LoginPassword);
