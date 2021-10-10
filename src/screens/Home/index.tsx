import React from 'react'
import { FlatList } from 'react-native'

import { ProductItem } from '../../components/ProductItem'
import { Container, Content } from './style'

export const Home = () => {
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
        <FlatList
          data={ products }
          keyExtractor={ item => item.id }
          renderItem={({ item }) => {
            return (
              <ProductItem key={ String(item.id) } product={ item }/>
            )
          }}
        />
      </Content>
    </Container>
  )
}
