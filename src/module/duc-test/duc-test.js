import NavigationBar from 'component/navigation-bar';
import Text from 'component/text';
import { memo } from 'react';
import { SafeAreaView, View } from 'react-native';

const DucTest = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar title="DucTest" />
      <View style={{ flex: 1 }}>
        <Text>ducnh test</Text>
      </View>
    </SafeAreaView>
  );
};

export default memo(DucTest);
