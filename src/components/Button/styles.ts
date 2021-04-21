import styled from 'styled-components/native'
import { colors, fonts } from '../../styles'

import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
    height: 56px;
    width: 100%;
    background-color: ${colors.green}; 
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.white};
    font-family: ${fonts.heading}
`