import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './../screens/Home'
import { Cart } from './../screens/Cart'

export type RootStackParamList = {
  Home: undefined
  Cart: undefined
}

export const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home}/>
      <Screen name="Cart" component={Cart}/>
    </Navigator>
  )
}
