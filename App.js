import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Suspense, useEffect } from 'react';
import { LogBox, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import AppRoute from 'routes';
import { toastConfig } from 'utils/helper';

// Extend dayjs plugin
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Suspense fallback={<View />}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <AppRoute />
            <Toast config={toastConfig} />
          </SafeAreaProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
