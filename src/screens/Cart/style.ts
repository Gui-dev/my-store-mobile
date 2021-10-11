import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { colors, text } from '../../styles/global'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors['gray-800']};
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  margin: 0 10%;
`

export const TotalContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`

export const TotalText = styled.Text`
  font-size: ${text.heading};
  color: ${colors.white};
  margin-right: 10px;
`

export const TotalValue = styled.Text`
  font-size: ${text.extraHeading};
  color: ${colors['green-500']};
`

export const ButtonCheckout = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px 0;
  height: 50px;
  width: 100%;
  background-color: ${colors['green-500']};
  border-radius: 4px;
`

export const ButtonCheckoutText = styled.Text`
  font-size: ${text.heading};
  color: ${colors.white};
`
