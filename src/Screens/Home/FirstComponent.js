import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab1 = () => {
  return (
    <View>
      <Text>Tab 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View>
      <Text>Tab 1</Text>
    </View>
  );
};

const Tab4 = () => {
  return (
    <View>
      <Text>Tab 4</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
function FirstComponent() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Tab1') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-outline';
          }
          if(route.name === 'Tab2'){
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-outline';
          }
          if(route.name === 'Tab3'){
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-outline';
          }
          if(route.name === 'Tab4'){
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Tab4" component={Tab4} />
    </Tab.Navigator>
  );
}
export default FirstComponent;
