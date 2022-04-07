import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/StarckNavigators';


const App = () => {
  return(
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;