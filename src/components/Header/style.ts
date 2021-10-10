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
  margin: 0 5%;
`

export const ButtonLink = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ButtonLinkText = styled.Text`
  font-size: ${text.heading};
  color: ${colors.white};
`
