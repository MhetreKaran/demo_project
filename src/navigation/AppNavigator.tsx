import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';
import TabNavigation from './TabNavigation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const islogged = useSelector(state => state?.todos?.isLogged);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!islogged && <Stack.Screen name="Login" component={Login} />}
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


