import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import {
    colors,
    fonts,
} from '../../styles'

export const PlantContainerButton = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${colors.shape};
    border-radius: 20px;
    padding: 10px 0;
    align-items: center;
    margin: 10px;
`
export const Title = styled.Text`
    color: ${colors.green_dark};
    font-family: ${fonts.heading};
    margin: 16px 0;
`