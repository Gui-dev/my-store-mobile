import React from 'react'

import { Container, Image, Title, Price, Button, ButtonText } from './style'

type ProductItemProps = {
  product: {
    id: string
    createdAt: string
    name: string
    price: string
    image: string
    stock: number
  }
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Container>
      <Image source={{ uri: product.image }}/>
      <Title>{product.name}</Title>
      <Price>{product.price}</Price>
      <Button>
        <ButtonText>Add to cart</ButtonText>
      </Button>
    </Container>
  )
}
