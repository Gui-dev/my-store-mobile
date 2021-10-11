import React from 'react'
import { Feather } from '@expo/vector-icons'

import {
  Container, Image, Title, Price, Subtotal, ButtonContainer, ButtonActions,
  ButtonMinus, AmountText, ButtonPlus, ButtonText, ButtonTrash
} from './style'

type CartItemProps = {
  product: {
    id: string
    name: string
    price: string
    subtotal: string
    formattedPrice: string
    createdAt: string
    image: string
    stock: number | undefined
    amount: number
  },
  onRemoveProduct: (productId: string) => void,
  onIncrementProductAmount: (productId: string, amount: number) => void,
  onDecrementProductAmount: (productId: string, amount: number) => void,
}

export const CartItem = ({
  product,
  onRemoveProduct,
  onIncrementProductAmount,
  onDecrementProductAmount
}: CartItemProps) => {
  return (
    <Container>
      <Image source={{ uri: product.image }}/>
      <Title>{product.name}</Title>
      <Price>{product.formattedPrice}</Price>
      <Subtotal>Subtotal: {product.subtotal}</Subtotal>

      <ButtonContainer>
        <ButtonActions>
          <ButtonMinus
            onPress={ () => onDecrementProductAmount(product.id, product.amount) }
          >
            <ButtonText>-</ButtonText>
          </ButtonMinus>
          <AmountText>{ product.amount }</AmountText>
          <ButtonPlus
            onPress={ () => onIncrementProductAmount(product.id, product.amount) }
          >
            <ButtonText>+</ButtonText>
          </ButtonPlus>
        </ButtonActions>

        <ButtonTrash
          onPress={ () => onRemoveProduct(product.id) }
        >
          <Feather name="trash" size={32} color="#f33b3b"/>
        </ButtonTrash>
      </ButtonContainer>
    </Container>
  )
}
