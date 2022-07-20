import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getRestaurants} from '../../../store/slices/getRestaurants';
import axios from 'axios';

const Item = ({item}) => (
  <Card style={{width: 450, marginTop: 10, padding: 5}}>
    <Card.Cover
      source={{
        uri: 'https://media.istockphoto.com/photos/dinner-picture-id1384440360?k=20&m=1384440360&s=612x612&w=0&h=g87F-U5MmgGwrEJAJmfclEWTaBRc7QOJUHTnQvgp6mk=',
      }}
    />
    <Title>{item.name}</Title>
    <Paragraph>{item.location}</Paragraph>
  </Card>
);
const List = () => {
  const dispatch = useDispatch();
  // const {data, loading} = useSelector(state => state.getRestaurants.data);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');

  const getMovies = async () => {
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
    getMovies();
  }, []);

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={{flex: 1, padding: 24, alignSelf: 'center'}}>
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
function FirstComponent() {
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
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Tab4" component={Tab4} />
    </Tab.Navigator>
  );
}
export default FirstComponent;
