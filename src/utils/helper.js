import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StackActions,
  useNavigation as useNavigationNative
} from '@react-navigation/native';
import ENV from 'react-native-config';
import Toast, { BaseToast } from 'react-native-toast-message';
import API from 'utils/API';

export const navigationScreenOptions = {
  headerShown: false,
};

export const showToast = (type, text1, text2) => {
  Toast.show({
    text1: text1,
    text2: text2,
    type: type || 'info',
  });
};

export const setAsyncStorage = async (key, value) => {
  try {
    if (!value) {
      await AsyncStorage.removeItem(key);
    } else {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    }
  } catch (e) {
    console.error('setAsyncStorage-fail:', e);
  }
};

export const getAsyncStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.error('getAsyncStorage-fail:', e);
  }
};

export const uploadImage = (image, type) => {
  const config = {
    baseURL: ENV.CDN_UPLOAD,
    url: `/api/image_base64_uploader?type=${type}`,
    params: {
      imageData: image.data,
      fileName: 'upload.png',
    },
    method: 'POST',
  };

  return API.request(config);
};

export const toastConfig = {
  error: ({ ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),

  success: ({ ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),

  info: ({ ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: '#87CEFA' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),
};

export const useNavigation = () => {
  const navigation = useNavigationNative();

  return {
    ...navigation,
    navigate: (route, params, type) => {
      if (type === 'push') {
        const pushAction = StackActions.push(route, params);
        navigation.dispatch(pushAction);
        return;
      }
      navigation.navigate(route, params);
    },
    goBack: (type, numOfRoute) => {
      if (type === 'pop') {
        const popAction = StackActions.pop(numOfRoute || 1);
        navigation.dispatch(popAction);
        return;
      }
      navigation.goBack();
    },
  };
};

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
