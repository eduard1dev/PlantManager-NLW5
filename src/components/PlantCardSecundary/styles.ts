import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import {
    colors,
    fonts,
} from '../../styles'

export const PlantContainerButton = styled(RectButton)`
    flex-direction: row;
    max-width: 100%;
    background-color: ${colors.shape};
    border-radius: 20px;
    padding: 25px 10px;
    align-items: center;
    margin: 5px 0;
    background-color: ${colors.shape};
`
export const Title = styled.Text`
    flex: 1;
    font-size: 17px;
    font-family: ${fonts.heading};
    margin-left: 10px;
    color: ${colors.heading};
`

export const DetailsContainer = styled.View`
    align-items: flex-end;
`
export const TimeLabel = styled.Text`
    font-size: 16px;
    font-family: ${fonts.text};
    color: ${colors.body_light};
`
export const TimeText = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    font-family: ${fonts.heading};
    color: ${colors.body_dark};
`
export const RemoveButton = styled(RectButton)`
    width: 100px;
    height: 85px;
    background-color: ${colors.red};
    margin-top: 15px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 20px;
    padding-left: 15px;
`