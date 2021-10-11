import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Image, Title, Price, Button, ButtonText } from './style'

type ProductItemProps = {
  product: {
    id: string
    createdAt: string
    name: string
    price: string
    image: string
    stock: number
    formattedPrice: string
  },
  onAddProductToCart: (productId: string) => Promise<void>
}

export const ProductItem = ({ product, onAddProductToCart }: ProductItemProps) => {
  return (
    <Container>
      <Image source={{ uri: product.image }}/>
      <Title>{product.name}</Title>
      <Price>{product.formattedPrice}</Price>
      <Button
        onPress={ () => onAddProductToCart(product.id) }
      >
        <Feather name="shopping-cart" size={32} color="#FFF"/>
        <ButtonText>Add to cart</ButtonText>
      </Button>
    </Container>
  )
}
