import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Redirect } from 'expo-router'
import { useGlobalContext } from '../context/GlobalProvider'

const AuthLayout = () => {

    const { loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})