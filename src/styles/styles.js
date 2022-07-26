import React from "react";
import {StyleSheet} from 'react-native'

export const styless = () => {
    return StyleSheet.create({
        backgroundColor:'red'
    })
}

export const styles = StyleSheet.create({
    // Login screen styles
    container:{
        flex:1
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
        flex: 1,
      },
      form: {
        flex: 2.5,
        justifyContent: 'flex-end',
    
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
        color: 'black',
      },
      input_wraper: {
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
})