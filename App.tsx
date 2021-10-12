/* eslint-disable camelcase */
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
// files
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store, { persistor } from './src/lib/redux/store';

export default function App(): JSX.Element | null {
  // react-query
  const [queryClient] = useState(() => new QueryClient());

  // navigation theme
  const colorScheme = useColorScheme();

  // load assets
  const [fontsLoaded] = useFonts({
    Amarante_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
