import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { colors, text } from '../../styles/global'

export const Container = styled.View`
  padding: 15px;
  background-color: ${colors['gray-600']};
  margin-bottom: 20px;
`

export const Image = styled.Image`
  height: 100px;
  width: 100%;
`

export const Title = styled.Text`
  align-self: center;
  font-size: ${text.heading};
  color: ${colors['gray-100']};
  margin-top: 15px;
`

export const Price = styled.Text`
  align-self: center;
  font-size: ${text.extraHeading};
  font-weight: bold;
  color: ${colors['gray-100']};
  margin-top: 10px;
`

export const Subtotal = styled.Text`
  align-self: center;
  font-size: ${text.normal};
  color: ${colors['gray-100']};
  margin-top: 10px;
`

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
`

export const ButtonActions = styled.View`
  align-items: center;
  flex-direction: row;
`

export const ButtonMinus = styled(RectButton)`
  height: 30px;
  width: 30px;
  background-color: ${colors['green-500']};
  border-radius: 5px;
`

export const AmountText = styled.Text`
  font-size: ${text.heading};
  color: ${colors.white};
  text-align: center;
  height: 30px;
  width: 30px;
`

export const ButtonPlus = styled(RectButton)`
  height: 30px;
  width: 30px;
  background-color: ${colors['green-500']};
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  align-self: center;
  font-size: ${text.heading};
  color: ${colors.white};
`

export const ButtonTrash = styled(RectButton)`

`
