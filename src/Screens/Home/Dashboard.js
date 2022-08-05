import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Restaurants from './Restaurants';
import SecondComponent from './SecondComponent';
import {Unauthorised} from '../Auth/Unauthorised';

const Drawer = createDrawerNavigator();

export const Dashboard = ({navigation}) => {
  const [data, setData] = useState('');
  const {user} = useSelector(state => state.signin);
  const [token, setToken] = useState(null)
  useEffect(() => {
    storage
      .load({
        key: 'token',
        autoSync: true,
        syncInBackground: true,
      })
      .then(ret => {
        setToken(ret.token)
      })
      .catch(err => {
        console.warn(err.message);
      });
    setData(user);
  }, []);

if(!token){
  return navigation.navigate('Login')
}
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
