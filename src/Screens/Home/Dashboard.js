import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

function FirstComponent() {
  return (
    <View>
      <Text>First Drawer Component</Text>
    </View>
  );
}

function SecondComponent() {
  return (
    <View>
      <Text>Second Drawer Component</Text>
    </View>
  );
}

export const Dashboard = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FirstComponent" component={FirstComponent} />
      <Drawer.Screen name="SecondComponent" component={SecondComponent} />
    </Drawer.Navigator>
  );
};
