import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { Header } from './src/components/Header'
import { Routes } from './src/routes'

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Header />
      <Routes />
    </NavigationContainer>
  )
}
