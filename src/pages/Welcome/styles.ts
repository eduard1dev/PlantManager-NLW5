import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
`
export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.heading};
`
export const Subtitle = styled.Text`
    text-align: center;
    font-size: 18px;
    padding-right: 20px;
    padding-left: 20px;
    color: ${colors.heading};
    font-family: ${fonts.text};
`
export const Button = styled.TouchableOpacity`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
`