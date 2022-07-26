import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import  {useSelector} from 'react-redux'
import Restaurants from './Restaurants';
import SecondComponent from './SecondComponent';

const Drawer = createDrawerNavigator();

export const Dashboard = () => {
  const [user, setUser] = useState('')
  const {data} = useSelector(state => state.signin)
  useEffect(() => {
    setUser(data)
  }, [])
  console.log(user, 'user')
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Restaurants" component={Restaurants} />
      <Drawer.Screen name="SecondComponent" component={SecondComponent} />
    </Drawer.Navigator>
  );
};
