import IconBack from 'assets/images/icon-back-screen.png';
import { memo, useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'utils/helper';
import { styles } from './navigation-bar.style';

const ActionBack = ({ onPressGoBack }) => {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    if (onPressGoBack) {
      onPressGoBack();
      return;
    }
    navigation.goBack();
  }, [navigation, onPressGoBack]);

  return (
    <TouchableOpacity
      style={styles.toBack}
      activeOpacity={0.8}
      onPress={onGoBack}>
      <Image source={IconBack} style={styles.imgIconBack} />
    </TouchableOpacity>
  );
};

export default memo(ActionBack);
