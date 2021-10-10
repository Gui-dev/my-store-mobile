import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Feather } from '@expo/vector-icons'

// import { useCart } from '../../hooks/useCart'

import { RootStackParamList } from '../../routes'
import { Container, Content, ButtonLink, ButtonLinkText } from './style'

type HeaderScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>

export const Header = () => {
  // const { cart } = useCart()
  const { navigate } = useNavigation<HeaderScreenProps>()

  const handleNavigationToHome = () => {
    navigate('Home')
  }

  const handleNavigationToCart = () => {
    navigate('Cart')
  }

  return (

    <Container>
      <Content>
        <ButtonLink
          onPress={ handleNavigationToHome }
        >
          <ButtonLinkText>MyStore.</ButtonLinkText>
          <Feather name="shopping-bag" size={24} color="#FFF"/>
        </ButtonLink>

        <ButtonLink
          onPress={ handleNavigationToCart }
        >
          <Feather name="shopping-cart" size={24} color="#FFF"/>
        </ButtonLink>
      </Content>

    </Container>

  )
}
