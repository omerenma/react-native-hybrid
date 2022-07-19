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

export const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../../images/people.png')}
          style={{width: 400, height: 150, position: 'relative', top: 5}}
          resizeMode="center"
        />
      </View>
      {/* <View style={styles.heading}>
        <Text>Please start your onboarding process</Text>
      </View> */}
      <Card style={styles.form}>
        <Text style={styles.heading}>Please start your onboarding process</Text>
        <View>
          <TextInput
            placeholder="Fullname"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="Phone"
            value={phone}
            keyboardType="numeric"
            onChangeText={text => setPhone(text)}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
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
        <TouchableOpacity style={styles.submit}>
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
            <TouchableHighlight onPress={() => navigation.navigate('Login')}>
              <Text>Already have an account, login</Text>
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
    // padding: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor:'green'
  },
  text: {
    color: 'black',
  },
  heading: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'relative',
    // bottom: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  image: {
    // backgroundColor:'red',
    flex: 1,
  },
  form: {
    // backgroundColor: 'blue',
    flex: 2.5,
    // borderRadius: 10,
    padding: 5,
    justifyContent: 'flex-end',

    // margin:'5px 0'
  },
  input: {
    // borderWidth: 0.7,
    borderColor: '#efefef',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    width: 350,
    alignSelf: 'center',
    // borderRadius:5
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
