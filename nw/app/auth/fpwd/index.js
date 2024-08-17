import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../../constants/Colors.ts';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Fpwd() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
  return (
    <View style={{
      backgroundColor: Colors.WHITE,
      height: '100%',
      justifyContent: 'center'
    }}>
      <View style={{
        width: '80%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
        <TouchableOpacity onPress={() => router.back()} style={{
          alignSelf: 'flex-start',
          padding: 15,
        }}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <View style={{
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          backgroundColor: Colors.madublue,
          borderRadius: 20,
        }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
            color: Colors.WHITE,
          }}>
            Reset Your Password
          </Text>
        </View>
      </View>
      <View style={{
        alignItems:'center',
        padding: 10,
      }}>
        <TextInput style={styles.input} placeholder='Enter Email'/>
      </View>
      <View style={{
        height: '15%',
        justifyContent: 'space-evenly'
      }}>
        <View style={{
          alignItems: 'center',
          padding: 15,
          backgroundColor: Colors.madublue,
          borderRadius: 15,
          width: '75%',
          alignSelf: 'center',
        }}>
          <Text style={{
            fontSize: 15,
            color: Colors.WHITE,
          }}>Send Reset Token</Text>
        </View>
      </View>
      <TouchableOpacity 
      onPress={() => router.replace('auth/sign-in')}
      style={{
          alignItems: 'center',
          padding: 15,
          borderColor: Colors.madublue,
          borderWidth: 2,
          borderRadius: 15,
          width: '75%',
          alignSelf: 'center',
        }}>
          <Text style={{
            fontSize: 15,
            color: Colors.madublue,
          }}>Sign In</Text>
        </TouchableOpacity>
        <View style={{
          padding: 30,
        }}>

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