/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
// import { CounterScreen } from './src/screens/CounterScreen';

// import { HelloWordScreen } from './src/screens/HelloWordScreen';



const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BoxObjectModelScreen /> */}
      <DimensionsScreen />
    </SafeAreaView>
    // <HelloWordScreen />
    // <CounterScreen />
  );
};


export default App;
