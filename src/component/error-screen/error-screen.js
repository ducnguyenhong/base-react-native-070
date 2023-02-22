import IconError from 'assets/images/icon-error.png';
import Text from 'component/text';
import { memo } from 'react';
import { Image, View } from 'react-native';
import { styles } from './error-screen.style';

const ErrorScreen = props => {
  const { message, FooterComponent } = props;

  return (
    <View style={styles.vError}>
      <Image source={IconError} style={styles.imgError} />
      <Text style={styles.tErrorLabel}>Lỗi !</Text>
      <Text style={styles.tErrorContent}>
        {message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau nhé!'}
      </Text>
      {!!FooterComponent && FooterComponent}
    </View>
  );
};

export default memo(ErrorScreen);
