import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../../constants/Colors.ts';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SignIn() {
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
        padding: 5,
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
      <TouchableOpacity 
      onPress={() => router.replace('auth/fpwd')}
      style={{
        padding: 8,
        paddingTop: 10,
        paddingBottom: 0,
        alignItems: 'center',
      }}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
      <View style={{
        height: '30%',
        justifyContent: 'space-evenly'
      }}>
        <TouchableOpacity onPress={() => router.replace('/home/shops')}
        style={{
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
          }}>Sign In</Text>
        </TouchableOpacity>
        <View style={{
          alignItems: 'center',
          padding: 15,
          borderColor: Colors.madublue,
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 15,
          width: '75%',
          alignSelf: 'center',
        }}>
          <AntDesign name="google" size={20} color="black" />
          <Text style={{
            fontSize: 15,
            color: Colors.madublue,
            paddingLeft: 15,
          }}>Login With Google </Text>
        </View>
        <View style={{
          alignItems: 'center',
          padding: 13,
          borderColor: Colors.madublue,
          borderWidth: 2,
          borderRadius: 15,
          width: '75%',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
          <Ionicons name="logo-facebook" size={20} color="black"/>
          <Text style={{
            fontSize: 15,
            paddingLeft: 15,
            color: Colors.madublue,
          }}>Login With Facebook</Text>
        </View>
      </View>
      <TouchableOpacity 
      onPress={() => router.replace('auth/sign-up')}
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
          }}>Create Account</Text>
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