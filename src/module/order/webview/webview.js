import Clipboard from '@react-native-community/clipboard';
import { useRoute } from '@react-navigation/native';
import IconCopy from 'assets/images/icon-link.png';
import NavigationBar from 'component/navigation-bar';
import Text from 'component/text';
import { createRef, memo, useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  SafeAreaView,
  TouchableHighlight,
  useWindowDimensions,
  View
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { WebView } from 'react-native-webview';
import { showToast } from 'utils/helper';
import IconOpenBrowser from './images/icon-browser.png';
import { styles } from './webview.style';

const WebViewScreen = () => {
  const route = useRoute();
  const actionSheetRef = createRef();
  const { link, title } = route.params || {};
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowDimensions();

  const onCopyComment = useCallback(() => {
    actionSheetRef.current?.hide();
    Clipboard.setString(link);
    showToast('success', 'Sao chép liên kết thành công');
  }, [actionSheetRef, link]);

  const onShowMoreAction = useCallback(
    () => actionSheetRef.current?.show(),
    [actionSheetRef],
  );

  const onLoad = useCallback(() => setLoading(false), []);

  const onOpenLinkBrowser = useCallback(() => Linking.openURL(link), [link]);

  if (!link) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <NavigationBar
        title={title || 'CoopBank'}
        showMore
        onPressMore={onShowMoreAction}
      />
      <WebView
        onLoad={onLoad}
        source={{
          uri: link,
        }}
        javaScriptEnabled
      />

      {loading && (
        <ActivityIndicator
          style={{
            position: 'absolute',
            top: height / 2 - 20,
            left: width / 2 - 20,
          }}
          size={40}
          color="#8C429E"
        />
      )}

      <ActionSheet ref={actionSheetRef} closeOnPressBack>
        <View style={styles.vASWrapper}>
          <View style={styles.vASItem}>
            <TouchableHighlight
              underlayColor="#F0F0F5"
              style={styles.thASItem}
              onPress={onCopyComment}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={IconCopy}
                  style={{ width: 25, marginRight: 15 }}
                />
                <Text style={styles.tASItem}>Sao chép liên kết</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#F0F0F5"
              style={styles.thASItem}
              onPress={onOpenLinkBrowser}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={IconOpenBrowser}
                  style={{ width: 25, marginRight: 15 }}
                />
                <Text style={styles.tASItem}>Mở trong trình duyệt</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default memo(WebViewScreen);
