// import IconLogo from 'assets/images/img-logo.png';
import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './loading-screen.style';

const LoadingScreen = ({ onLoadEnd }) => {
  return (
    <View style={styles.vLoading}>
      {/* <Image
        onLoadEnd={onLoadEnd}
        source={IconLogo}
        style={styles.imgStartLoading}
        resizeMode="contain"
      /> */}
      <ActivityIndicator
        style={styles.aiLoading}
        color="#bfbfbf"
        size="large"
      />
    </View>
  );
};

export default memo(LoadingScreen);
