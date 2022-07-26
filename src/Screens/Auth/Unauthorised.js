import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles/styles'

export const Unauthorised = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', position:'relative', top:15,}}>Unauthorised to view this resource</Text>

      <View style={{flex: 2}}>
        <Image
          source={require('../../images/unauthorised.png')}
          style={{width: 400, height: 400, alignSelf: 'center'}}
          resizeMode="center"
        />
      </View>
      <View style={{position:'relative', top:400}}>
        <TouchableOpacity style={styles.submit}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
