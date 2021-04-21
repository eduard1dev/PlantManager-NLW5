import styled from 'styled-components/native'
import {
    colors,
    fonts
} from '../../styles'

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
`
export const Form = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 54px;
`
export const Title = styled.Text`
    font-size: 22px;
    line-height: 38px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    margin-top: 15px;
`
export const Subtitle = styled.Text`
    font-size: 17px;
    line-height: 38px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.text};
    padding: 10px 0;
`