import Text from 'component/text';
import { memo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import packageJson from '../../../../package.json';
import LoginForm from './subs/login-form';
import LoginHeader from './subs/login.header';
import { styles } from './subs/login.style';

const Login = () => {
  return (
    <SafeAreaView style={styles.savMain}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.vMain}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <LoginHeader />
            <LoginForm />
          </ScrollView>
          <View style={styles.vFooterInfo}>
            <Text
              style={
                styles.tVersion
              }>{`Phiên bản ${packageJson.version}`}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default memo(Login);
