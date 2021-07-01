import * as React from 'react';
import {createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';
import App from '../screen/App';

const Stack = createStackNavigator();

export default function Roots() {
    return (
        <Stack.Navigator screenOptions={{ animationEnabled: true ,  }} >
          
              <Stack.Screen name="app" component={App} options={{ headerShown:false }}/>

        </Stack.Navigator>
      )
}