import React from 'react'

import { CartItem } from '../../components/CartItem'
import { useCart } from '../../hooks/useCart'
import { formattedPrice } from '../../utils/formattedPrice'
import {
  Container, Content, EmptyCart, EmptyCartText, TotalContainer, TotalText, TotalValue,
  ButtonCheckout, ButtonCheckoutText
} from './style'

export const Cart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart()

  const products = cart.map(cartItem => {
    return {
      ...cartItem,
      formattedPrice: formattedPrice(Number(cartItem.price)),
      subtotal: formattedPrice(Number(cartItem.price) * cartItem.amount)
    }
  })

  const total = formattedPrice(
    products.reduce((totalValue, product) => {
      totalValue += Number(product.price) * Number(product.amount)

      return totalValue
    }, 0)
  )

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId)
  }

  const handleIncrementProductAmount = (productId: string, amount: number) => {
    updateProductAmount(productId, amount + 1)
  }

  const handleIDecrementProductAmount = (productId: string, amount: number) => {
    updateProductAmount(productId, amount - 1)
  }

  return (
    <Container>
      <Content>
        {
          products && products.length > 0
            ? (
                products.map(product => {
                  return (
                <CartItem
                  key={ String(product.id) }
                  product={ product }
                  onRemoveProduct={ handleRemoveProduct }
                  onIncrementProductAmount={ handleIncrementProductAmount }
                  onDecrementProductAmount={ handleIDecrementProductAmount }
                />
                  )
                })
              )
            : (
            <EmptyCart>
              <EmptyCartText>
                Você ainda não tem produtos no carrinho
              </EmptyCartText>
            </EmptyCart>
              )
        }

        {products && products.length > 0 && (
          <>
            <TotalContainer>
              <TotalText>Total</TotalText>
              <TotalValue>{ total }</TotalValue>
            </TotalContainer>

            <ButtonCheckout>
              <ButtonCheckoutText>Checkout</ButtonCheckoutText>
            </ButtonCheckout>
          </>
        )}

      </Content>
    </Container>
  )
}
