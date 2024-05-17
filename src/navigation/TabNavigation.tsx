import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import MoviesScreen from '../screens/MoviesScreen';
import LocationScreen from '../screens/LocationScreen';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="MoviesScreen" component={MoviesScreen} />
      <Tab.Screen name="LocationScreen" component={LocationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
