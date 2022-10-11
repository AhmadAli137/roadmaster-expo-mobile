import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../features/MainScreens/MapsScreen'
import { ReauthenticateScreen } from '../features/update-password/screens/ReauthenticateScreen'
import { UpdatePasswordScreen } from '../features/update-password/screens/UpdatePasswordScreen'
import { View } from 'native-base'
import { MainNavigator } from './MainNavigator'

const Stack = createStackNavigator()

export const VerifiedAppNavigator = () => (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#3385ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reauthenticate"
          component={ReauthenticateScreen}
          options={{ title: 'Sign in' }}
        />
        <Stack.Screen
          name="UpdatePassword"
          component={UpdatePasswordScreen}
          options={{ title: 'Update Password' }}
        />
      </Stack.Navigator>
)
