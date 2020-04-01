import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';

import { storeConfig } from './redux/store';

import Home from './Screens/Home';
import Report from './Screens/Report';
import States from './Screens/States';
import Districts from './Screens/Districts';

const Stack = createStackNavigator();
const store = storeConfig();

export default function App () {
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={ Home } />
          <Stack.Screen name='Report' component={ Report } options={ ( { route } ) => ( { title: route.params.name.toUpperCase() } ) } />
          <Stack.Screen name='States' component={ States } />
          <Stack.Screen name='Districts' component={ Districts } options={ ( { route } ) => ( { title: route.params.name.toUpperCase() } ) } />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


