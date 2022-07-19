import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const Drawer = createDrawerNavigator();

export const Dashboard = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="FirstComponent" component={FirstComponent} />
      <Drawer.Screen name="SecondComponent" component={SecondComponent} />
    </Drawer.Navigator>
  );
};
