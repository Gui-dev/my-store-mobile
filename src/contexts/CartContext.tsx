import React, { createContext, ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api'

type Product = {
  id: string
  createdAt: string
  name: string
  price: string
  image: string
  stock: number | undefined
  amount: number
}

type CartContextProps = {
  cart: Product[]
  addProduct: (productId: string) => Promise<void>
  removeProduct: (productId: string) => Promise<void>
  updateProductAmount: (productId: string, amount: number) => Promise<void>
  removeCart: () => Promise<void>
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const loadStorage = async () => {
      const storagedCart = await AsyncStorage.getItem('mycart:cart')

      if (storagedCart) {
        return setCart(JSON.parse(storagedCart))
      }
    }
    loadStorage()
  }, [])

  const addProduct = async (productId: string): Promise<void> => {
    try {
      const productAlreadyExistis = cart.find(product => product.id === productId)

      if (!productAlreadyExistis) {
        const { data } = await api.get<Product>(`/product/${productId}`)

        setCart([...cart, { ...data, amount: 1 }])
        await AsyncStorage.setItem('mycart:cart', JSON.stringify([...cart]))
        // toast.success('Produto adicionado no carrinho')
        return
      }

      const updatedCart = cart.map(cartItem => cartItem.id === productId
        ? {
            ...cartItem,
            amount: Number(cartItem.amount) + 1
          }
        : cartItem
      )

      setCart(updatedCart)
      await AsyncStorage.setItem('mycart:cart', JSON.stringify(updatedCart))
      // toast.success('Quantidade atualiza no carrinho')
    } catch (error) {
      // toast.error('Não foi possível adicionar esse produto')
    }
  }

  const removeProduct = async (productId: string): Promise<void> => {
    try {
      const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
      setCart(updatedCart)
      await AsyncStorage.setItem('mycart:cart', JSON.stringify(updatedCart))
      // toast.success('Produto removido do carrinho')
    } catch (error) {
      // toast.error('Erro ao tentar remover produto')
    }
  }

  const updateProductAmount = async (productId: string, amount: number) => {
    try {
      const product = cart.find(cartItem => cartItem.id === productId)
      const productInStock = Number(product?.stock)

      if (amount < 1) {
        // toast.warn('Quantidade não pode ser menor que 1')
        return
      }

      if (amount > productInStock) {
        // toast.warn('Quantidade maior que temos em estoque, desculpe')
        return
      }

      const updatedCart = cart.map(cartItem => cartItem.id === productId
        ? {
            ...cartItem,
            amount
          }
        : cartItem
      )
      setCart(updatedCart)
      await AsyncStorage.setItem('mycart:cart', JSON.stringify(updatedCart))
    } catch (error) {
      // toast.error('Erro ao atualizar a Quantidade')
    }
  }

  const removeCart = async (): Promise<void> => {
    await AsyncStorage.removeItem('mycart:cart')
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addProduct,
      removeProduct,
      updateProductAmount,
      removeCart
    }}>
      { children }
    </CartContext.Provider>
  )
}
