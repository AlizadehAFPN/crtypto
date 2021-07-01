import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'
import Roots from './navigation/Roots';

export default function Main() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
          <Roots />
      </NavigationContainer>
     </StoreProvider>
  );
}