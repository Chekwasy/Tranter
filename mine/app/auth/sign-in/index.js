import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../../constants/Colors.ts';

export default function SignIn() {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
  return (
    <View style={{
      backgroundColor: Colors.WHITE,
    }}>
      <View style={{
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          width: '80%',
          height: '30%',
          justifyContent: 'center',
          backgroundColor: Colors.madublue,
          borderBottomLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
            color: Colors.WHITE,
          }}>
            Let's Sign You In
          </Text>
        </View>
      </View>
      <View style={{
        width: '100%',
        alignContent: 'center',
        height: '10%',
      }}>
        <Text style={{
          color: Colors.Grey,
          textAlign: 'center',
          fontFamily: 'outfit-medium',
          fontSize: 26,
        }}>
          Welcome Back
        </Text>
      </View>
      <View style={{
        alignItems:'center',
        padding: 10,
      }}>
        <TextInput style={styles.input} placeholder='Enter Email'/>
      </View>
      <View style={{
        alignItems:'center',
        padding: 10,
      }}>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 15,
    fontFamily: 'outfit',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.madublue,
  }  
})