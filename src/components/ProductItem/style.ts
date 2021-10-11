import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { colors, text } from './../../styles/global'

export const Container = styled.View`
  padding: 15px;
  background-color: ${colors['gray-600']};
  margin-bottom: 20px;
`

export const Image = styled.Image`
  height: 200px;
  width: 100%;
`

export const Title = styled.Text`
  align-self: center;
  font-size: ${text.heading};
  font-weight: bold;
  color: ${colors.white};
  margin-top: 15px;
`

export const Price = styled.Text`
  align-self: center;
  font-size: ${text.extraHeading};
  font-weight: bold;
  color: ${colors.white};
  margin-top: 10px;
`

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background-color: ${colors['green-500']};
  border-radius: 4px;
`

export const ButtonText = styled.Text`
  align-self: center;
  font-size: ${text.extraHeading};
  font-weight: bold;
  color: ${colors.white};
  margin-left: 10px;
`
