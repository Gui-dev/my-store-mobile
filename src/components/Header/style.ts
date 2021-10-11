import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { colors, text } from './../../styles/global'

export const Container = styled.View`
  width: 100%;
  background-color: ${colors['gray-900']};
`

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 80px;
  margin: 0 10%;
  margin-top: 15px;
`

export const ButtonLink = styled(RectButton)`
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ButtonLinkText = styled.Text`
  font-size: ${text.heading};
  color: ${colors.white};
`

export const CartItemAmount = styled.View`
  position: absolute;
  top: -25px;
  right:  20px;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: ${colors['green-500']};
  border-radius: 15px;
  z-index: 4;
`

export const CartItemAmountText = styled.Text`
  font-size: ${text.normal};
  font-weight: bold;
  color: ${colors.white};
`
