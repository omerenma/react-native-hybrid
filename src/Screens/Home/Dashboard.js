import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Restaurants from './Restaurants';
import SecondComponent from './SecondComponent';
import {Unauthorised} from '../Auth/Unauthorised';

const Drawer = createDrawerNavigator();

export const Dashboard = () => {
  const [data, setData] = useState('');
  const {user} = useSelector(state => state.signin);
  useEffect(() => {
    setData(user);
  }, []);

  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Restaurants" component={Restaurants} user={data} />
        <Drawer.Screen name="SecondComponent" component={SecondComponent} />
      </Drawer.Navigator>
    );
  
  // return (
  //   <View style={{justifyContent: 'center'}}>
  //     <Unauthorised />
  //   </View>
  // );
};
