import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from './../constants/Colors.ts';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/madukaonline2.jpeg')} 
        style={{
            marginTop: '10%',
            width: '100%',
            borderRadius: 20,
            height: 400
        }} 
      />
      <View style={styles.container}>
        <Text style={{
            marginTop: '10%',
            fontSize:25,
            textAlign: 'center',
            fontFamily: 'outfit-bold',
        }}
        >Maduka - Shops online
        </Text>
        <Text
            style={{
                fontFamily: 'outfit-medium',
                fontSize: 14,
                textAlign: 'center',
                marginTop: '5%',
            }}
        >Explore shops that is within your area or specified location.
        </Text>

        <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontSize: 17,
                fontFamily: 'outfit',
            }}>
                Get Started
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: '100%',
        margin: -20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    button: {
        backgroundColor: Colors.madublue,
        padding: 15,
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        marginTop: '20%',
    }
})

