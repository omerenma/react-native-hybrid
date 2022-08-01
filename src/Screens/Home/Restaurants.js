import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getRestaurants} from '../../../store/slices/getRestaurants';
import {style} from '../../styles/card';

const Item = ({item}) => (
  <View style={style.container}>
    <Image
      source={{uri: item.filepath}}
      style={{width: '100%', height: 150, position: 'relative', top: 10}}
      resizeMode="cover"
    />

    <View style={{marginTop: 15}}>
      <Title>{item.name}</Title>
      <Paragraph>{item.location}</Paragraph>
    </View>
  </View>
);
const List = ({user}) => {
  const dispatch = useDispatch();
  // const {data, loading} = useSelector(state => state.getRestaurants.data);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        'https://pernstackbackend.herokuapp.com/api/v1/restaurants',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={{flex: 1, backgroundColor: '#ecf0f1', padding: 5}}>
      {isLoading ? (
        <ActivityIndicator
          style={{justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const Reviews = () => {
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
function FirstComponent({user}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Restaurants') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-outline';
          }
          if (route.name === 'Reviews') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-outline';
          }
          if (route.name === 'Tab3') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-outline';
          }
          if (route.name === 'Tab4') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="List"
        component={List}
        user={user}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Tab3" component={Tab3} options={{headerShown: false}} />
      <Tab.Screen name="Tab4" component={Tab4} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
export default FirstComponent;
