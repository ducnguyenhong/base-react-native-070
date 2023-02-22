import IconMore from 'assets/images/icon-more-action.png';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './navigation-bar.style';

const ActionMore = ({ onPressMore }) => {
  return (
    <TouchableOpacity
      style={styles.toMore}
      activeOpacity={0.8}
      onPress={onPressMore}>
      <Image source={IconMore} style={styles.imgIconSearch} />
    </TouchableOpacity>
  );
};

export default memo(ActionMore);
