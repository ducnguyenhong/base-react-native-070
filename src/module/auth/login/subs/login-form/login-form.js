import Text from 'component/text';
import { Formik } from 'formik';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { getAsyncStorage, setAsyncStorage } from 'utils/helper';
import * as yup from 'yup';
import { useMutationLogin } from '../login.mutate';
import { styles } from '../login.style';
import LoginPassword from './login-form.password';
import LoginSubmit from './login-form.submit';
import LoginUsername from './login-form.username';
import ModalError from './modal-error';

const loginSchema = yup.object().shape({
  username: yup.string().required('Bạn chưa điền Tên đăng nhập'),
  password: yup.string().required('Bạn chưa điền Mật khẩu'),
});

const LoginForm = () => {
  const [localUsername, setLocalUsername] = useState('');
  const modalErrorRef = useRef();

  const initialValues = {
    username: localUsername,
    password: '',
  };

  const { mutate: loginMutate, isLoading, error } = useMutationLogin();

  const onSubmitForm = useCallback(
    values => {
      const { username, password } = values;
      Keyboard.dismiss();
      setAsyncStorage('remember-login', { username }).then(() =>
        loginMutate({ userName: username, password }),
      );
    },
    [loginMutate],
  );

  useEffect(() => {
    const checkLoginInfo = async () => {
      const storageLoginInfo = await getAsyncStorage('remember-login');
      setLocalUsername(storageLoginInfo?.username);
    };
    checkLoginInfo();
  }, []);

  return (
    <View style={styles.vForm}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmitForm}>
        {() => (
          <View>
            <LoginUsername isLoading={isLoading} />
            <LoginPassword isLoading={isLoading} />
            {!!error && (
              <Text
                style={{
                  textAlign: 'center',
                  color: '#e60000',
                  marginBottom: 5,
                }}>
                {error || 'Lỗi hệ thống. Vui lòng thử lại sau'}
              </Text>
            )}
            <LoginSubmit isLoading={isLoading} />
          </View>
        )}
      </Formik>
      <ModalError ref={modalErrorRef} />
    </View>
  );
};

export default memo(LoginForm);
