import React from 'react'
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Tab4" component={Tab4} />
    </Tab.Navigator>
  );
}
export default FirstComponent;
