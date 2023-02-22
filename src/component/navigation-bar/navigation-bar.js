import Text from 'component/text';
import { memo } from 'react';
import { View } from 'react-native';
import ActionBack from './subs/action-back';
import ActionMore from './subs/action-more';
import ActionSearch from './subs/action-search';
import { styles } from './subs/navigation-bar.style';

const NavigationBar = props => {
  const {
    title = '',
    NavigationCenter,
    NavigationLeft,
    NavigationRight,
    showSearch,
    showMore,
    onPressMore,
    onPressSearch,
    onPressGoBack,
  } = props;

  return (
    <View style={styles.vMain}>
      <View style={styles.vWrapperLeftCenter}>
        <View style={styles.vLeft}>
          {NavigationLeft || <ActionBack onPressGoBack={onPressGoBack} />}
        </View>

        <View style={styles.vCenter}>
          {NavigationCenter || (
            <Text numberOfLines={1} style={styles.tTitle}>
              {title}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.vRight}>
        {!!showSearch && <ActionSearch onPressSearch={onPressSearch} />}
        {!!showMore && <ActionMore onPressMore={onPressMore} />}
        {!!NavigationRight && <View>{NavigationRight}</View>}
      </View>
    </View>
  );
};

export default memo(NavigationBar);
