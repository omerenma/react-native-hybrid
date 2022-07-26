import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Card} from 'react-native-paper';
import {loginAction} from '../../../store/slices/signin';
import {styless, styles} from '../../styles/styles';

export const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, success} = useSelector(state => state.signin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    const data = {email, password};
    dispatch(loginAction(data)).then(res => {
      if(res.type == "login/action/rejected"){
        navigation.navigate('Login')
      }
      if(res.type === "login/action/fulfilled"){
        navigation.navigate('Home')
      }
      
    });
  };
  return (
    <View style={styles.container}>
      {/* style={styles.container} */}
      <View style={styles.image}>
        <Image
          source={require('../../images/people.png')}
          style={{width: 400, height: 150, position: 'relative', top: 10}}
          resizeMode="center"
        />
      </View>
      <View style={styles.heading}>
        <Text style={{fontSize: 30, color: 'black'}}>Welcome Back</Text>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Please enter your email and password to login
        </Text>
      </View>
      <Card style={styles.form}>
        <View style={{position: 'relative', top: 30}}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={[styles.input, styles.text]}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.submit} onPress={login}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.submit_text}>Login</Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'relative',
            top: 20,
          }}>
          <View>
            <TouchableHighlight>
              <Text style={{color: 'black'}}>Forgot password</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'black'}}>Don't have an account signup</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Card>
    </View>
  );
};
