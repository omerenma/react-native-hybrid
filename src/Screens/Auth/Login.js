import React, {useState} from 'react';
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

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../../images/people.png')}
          style={{width: 400, height: 150, position: 'relative', top: 10}}
          resizeMode="center"
        />
      </View>
      <View style={styles.heading}>
        <Text style={{fontSize: 30}}>Welcome Back</Text>
        <Text style={{fontWeight:'bold'}} >Please enter your email and password to login</Text>
      </View>
      <Card style={styles.form}>
        <View style={{position:'relative', top:30}}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={[styles.input]}
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
        <TouchableOpacity
          style={styles.submit}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.submit_text}>Submit</Text>
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
              <Text>Forgot password</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
              <Text>Don't have an account signup</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor:'green'
  },
  text: {
    color: 'black',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 70,
    color: 'black',
    zIndex: 1,
  },
  image: {
    // backgroundColor:'red',
    flex: 1,
  },
  form: {
    // backgroundColor: 'blue',
    flex: 2.5,
    // borderRadius: 10,
    // padding: 5,
    justifyContent: 'flex-end',

    // margin:'5px 0'
  },
  input: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 5,
    borderColor: '#efefef',
    marginTop: 60,
    width: 350,
    alignSelf: 'center',
  },
  input_wraper: {
    // marginTop: 50,
  },
  submit: {
    backgroundColor: 'coral',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    width: 350,
    alignSelf: 'center',
  },
  submit_text: {
    color: 'white',
    fontSize: 15,
  },
});
