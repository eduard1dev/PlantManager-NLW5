import styled from 'styled-components/native'

import {
    colors,
    fonts
} from '../../styles'

export const Container = styled.View`
    flex-direction: row;
    background-color: ${colors.background};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`
export const TextGreating = styled.Text`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.text};
`
export const TextUser = styled.Text`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
`
export const ImageContainer = styled.Image`
    height: 70px;
    width: 70px;
    border-radius: 40px;
`