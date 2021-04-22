import styled from 'styled-components/native'
import {
    colors,
    fonts,
} from '../../styles'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
`
export const HeaderContainer = styled.View`
    width: 100%;
    background-color: ${colors.background};
    padding: 0 20px;
`
export const Title = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 20px;
    margin-top: 15px;
`
export const Subtitle = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.text};
    line-height: 20px;
`
export const EnviromentContainer = styled.View`
    width: 100%;
    justify-content: center;
    margin: 32px 0;
`
export const PlantListContainer = styled.View`
    flex: 1;
    padding: 0 20px;
`