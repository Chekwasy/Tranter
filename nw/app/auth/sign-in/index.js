import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SignIn() {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}