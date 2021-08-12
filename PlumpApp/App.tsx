/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Start } from './src/views/Start';

const App: React.FC<{}> = () => {
  return (
    <SafeAreaProvider>
      <Start/>
    </SafeAreaProvider>
  );
};

export default App;
