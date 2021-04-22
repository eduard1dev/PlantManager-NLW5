import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import {
    colors,
    fonts,
} from '../../styles'

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.shape};
`
export const PlantInfoContainer = styled.ScrollView`
    flex: 1;
    padding: 50px 30px;
    background-color: ${colors.shape};
`
export const Title = styled.Text`
    font-family: ${fonts.heading};
    font-size: 24px;
    color: ${colors.heading};
    margin-top: 15px;
`
export const TextAbout = styled.Text`
    text-align: center;
    font-family: ${fonts.text};
    color: ${colors.heading};
    font-size: 17px;
    margin-top: 10px;
`
export const ControllerContainer = styled.View`
    background-color: ${colors.white};
    padding: 20px;
`
export const TipContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue_light};
    padding: 20px;
    border-radius: 20px;
    position: relative;
    bottom: 60px;
`
export const TipText = styled.Text`
    flex: 1;
    margin-left: 20px;
    font-family: ${fonts.text};
    color: ${colors.blue};
    font-size: 17px;
    text-align: justify;
`
export const AlertLabel = styled.Text`
    text-align: center;
    font-family: ${fonts.complement};
    color: ${colors.heading};
    font-size: 12px;
    margin-bottom: 5px;
`
export const TimePickerButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 40px 0;
`
export const TimePickerButtonText = styled.Text`
    color: ${colors.heading};
    font-family: ${fonts.text};
    font-size: 24px;
`