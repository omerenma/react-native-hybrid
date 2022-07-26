import React from "react";
import {StyleSheet} from 'react-native'

export const styless = () => {
    return StyleSheet.create({
        backgroundColor:'red'
    })
}

export const styles = StyleSheet.create({
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
        color: 'black',
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
})