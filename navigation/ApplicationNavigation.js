import * as React from 'react';


import { FirstTab } from '../components/FirstTab';
import { SecondTab } from '../components/SecondTab';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MainStack = createBottomTabNavigator();

export const ApplicationNavigation = () => {
  return (
    <NavigationContainer>
        <MainStack.Navigator initialRouteName="First">
            <MainStack.Screen name="First" component={FirstTab} />
            <MainStack.Screen name="Second" component={SecondTab}/>
        </MainStack.Navigator>
    </NavigationContainer>
  );
}