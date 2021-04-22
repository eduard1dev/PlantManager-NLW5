import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import {
    colors,
    fonts
} from '../../styles'

interface ContainerProps {
    active: boolean
}

export const ButtonContainer = styled(RectButton)<ContainerProps>`
    background-color: ${colors.shape};
    height: 40px;
    width: 76px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 5px;

    ${props =>
        props.active && 
        css`
            background-color: ${colors.green_light};
        `
    }
`
export const Title = styled.Text<ContainerProps>`
    color: ${colors.heading};
    font-family: ${fonts.text};
    ${props =>
        props.active && 
        css`
            color: ${colors.green_dark};
            font-family: ${fonts.heading};
        `
    }
`
