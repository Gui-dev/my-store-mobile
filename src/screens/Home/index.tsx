import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { ProductItem } from '../../components/ProductItem'
import { useCart } from '../../hooks/useCart'
import { api } from '../../services/api'
import { formattedPrice } from '../../utils/formattedPrice'
import { Container, Content } from './style'

type Product = {
  id: string
  createdAt: string
  name: string
  price: string
  image: string
  stock: number
  formattedPrice: string
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { addProduct } = useCart()

  useEffect(() => {
    api.get<Product[]>('/product')
      .then(response => {
        const result = response.data.map(product => {
          return {
            ...product,
            formattedPrice: formattedPrice(Number(product.price))
          }
        })

        setProducts(result)
      })
  }, [])

  const handleAddProductToCart = (productId: string) => {
    addProduct(productId)
  }

  return (
    <Container>
      <Content>
        <FlatList
          data={ products.slice(0, 9) }
          keyExtractor={ item => item.id }
          renderItem={({ item }) => {
            return (
              <ProductItem
                key={ String(item.id) }
                product={ item }
                onAddProductToCart={ handleAddProductToCart }
              />
            )
          }}
          showsVerticalScrollIndicator={ false }
        />
      </Content>
    </Container>
  )
}
