import ImgNoData from 'assets/images/img-no-data.png';
import Text from 'component/text';
import { memo } from 'react';
import { Image, View } from 'react-native';
import { styles } from './no-data.style';

const NoData = props => {
  const { content, bgTransparent, imgNoData } = props;

  return (
    <View style={bgTransparent ? styles.vNoDataTransparent : styles.vNoData}>
      <Image source={imgNoData || ImgNoData} style={styles.imgNoData} />
      <Text style={styles.tNoData}>{content || 'Không có dữ liệu'}</Text>
    </View>
  );
};

export default memo(NoData);
