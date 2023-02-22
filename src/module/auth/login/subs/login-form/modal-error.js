import IconError from 'assets/images/icon-error.png';
import Text from 'component/text';
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState
} from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from '../login.style';

const ModalError = forwardRef((_, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onConfirm = useCallback(() => setIsVisible(false), []);

  useImperativeHandle(ref, () => ({
    showModal(message) {
      setIsVisible(true);
      setErrorMessage(message);
    },
  }));

  return (
    <Modal isVisible={isVisible}>
      <View>
        <View style={styles.vModalError}>
          <Image source={IconError} style={styles.imgIconModalError} />
          <Text style={styles.tContentModalError}>{errorMessage}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onConfirm}
            style={styles.toConfirmModalError}>
            <Text style={styles.tConfirmModalError}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default memo(ModalError);
