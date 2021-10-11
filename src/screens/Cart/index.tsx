import React from 'react'

import { CartItem } from '../../components/CartItem'
import {
  Container, Content, TotalContainer, TotalText, TotalValue,
  ButtonCheckout, ButtonCheckoutText
} from './style'

export const Cart = () => {
  const products = [
    {
      id: '1',
      createdAt: '2019-09-02T12:58:54.103Z',
      name: 'Rustic Metal Fish',
      price: '289.00',
      image: 'http://lorempixel.com/640/480/food',
      stock: 65171
    },
    {
      id: '3',
      createdAt: '2019-09-02T12:58:54.103Z',
      name: 'Rustic Metal Fish',
      price: '289.00',
      image: 'http://lorempixel.com/640/480/food',
      stock: 65171
    },
    {
      id: '2',
      createdAt: '2019-09-02T12:58:54.103Z',
      name: 'Rustic Metal Fish',
      price: '289.00',
      image: 'http://lorempixel.com/640/480/food',
      stock: 65171
    }
  ]

  return (
    <Container>
      <Content>
        { products.map(product => {
          return (
            <CartItem
              key={ String(product.id) }
              product={ product }
            />
          )
        }) }

        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalValue>R$ 2.800,00</TotalValue>
        </TotalContainer>

        <ButtonCheckout>
          <ButtonCheckoutText>Checkout</ButtonCheckoutText>
        </ButtonCheckout>
      </Content>
    </Container>
  )
}
