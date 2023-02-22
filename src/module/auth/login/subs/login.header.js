import ImgLogo from 'assets/images/logo.png';
import { memo } from 'react';
import { Image, View } from 'react-native';
import { styles } from './login.style';

const LoginHeader = () => {
  return (
    <View style={styles.vHeader}>
      <Image source={ImgLogo} style={styles.imgLogo} resizeMode="contain" />
    </View>
  );
};

export default memo(LoginHeader);
