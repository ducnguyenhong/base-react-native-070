import { useRoute } from '@react-navigation/native';
import NavigationBar from 'component/navigation-bar';
import { SafeAreaView, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageSliderScreen = () => {
  const route = useRoute();
  const { images, index, isLocalImage } = route.params;

  if (!images) {
    return <View style={{ flex: 1 }} />;
  }

  let imageList = [];

  if (isLocalImage) {
    imageList = Array.isArray(images)
      ? images.map(item => ({
          props: { source: item },
        }))
      : [
          {
            props: { source: images },
          },
        ];
  } else {
    imageList = Array.isArray(images)
      ? images.map(item => ({ url: item }))
      : [{ url: images }];
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar title="Xem ảnh" />
      <ImageViewer
        saveToLocalByLongPress={false}
        imageUrls={imageList}
        index={index}
      />
    </SafeAreaView>
  );
};

export default ImageSliderScreen;
