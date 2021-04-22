import styled from 'styled-components/native'

import {
    colors,
    fonts,
} from '../../styles'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    padding-top: 50px;
    background-color: ${colors.background};
`

export const Spotlight = styled.View`
    background-color: ${colors.blue_light};
    padding: 0 20px;
    border-radius: 20px;
    height: 110px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const SpotlightText = styled.Text`
    flex: 1;
    color: ${colors.blue};
    padding: 0 20px;
    text-align: justify;
`
export const PlantsList = styled.View`
    flex: 1;
    width: 100%;
`
export const PlantsListTitle = styled.Text`
    font-size: 24px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    margin: 20px 0;
`