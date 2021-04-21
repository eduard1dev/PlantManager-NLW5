import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface InputProps {
    isFocused: boolean
    isFilled: boolean
}

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
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    margin-top: 20px;
`
export const Input = styled.TextInput<InputProps>`
    border-bottom-width: 1px;
    border-color: ${({isFocused, isFilled}) => isFocused || isFilled ? colors.green : colors.gray};
    color: ${colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 10px;
    text-align: center;
`
