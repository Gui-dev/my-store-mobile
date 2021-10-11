import React from 'react'
import { Feather } from '@expo/vector-icons'

import {
  Container, Image, Title, Price, ButtonContainer, ButtonActions,
  ButtonMinus, AmountText, ButtonPlus, ButtonText, ButtonTrash
} from './style'

type CartItemProps = {
  product: {
    id: string
    createdAt: string
    name: string
    price: string
    image: string
    stock: number
  }
}

export const CartItem = ({ product }: CartItemProps) => {
  const amount = 1

  return (
    <Container>
      <Image source={{ uri: product.image }}/>
      <Title>{product.name}</Title>
      <Price>{product.price}</Price>

      <ButtonContainer>
        <ButtonActions>
          <ButtonMinus>
            <ButtonText>-</ButtonText>
          </ButtonMinus>
          <AmountText>{amount}</AmountText>
          <ButtonPlus>
            <ButtonText>+</ButtonText>
          </ButtonPlus>
        </ButtonActions>

        <ButtonTrash>
          <Feather name="trash" size={32} color="#f33b3b"/>
        </ButtonTrash>
      </ButtonContainer>
    </Container>
  )
}
