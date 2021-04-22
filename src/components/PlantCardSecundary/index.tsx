import React from 'react'
import {

} from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import {
    PlantContainerButton,
    Title,
    DetailsContainer,
    TimeLabel,
    TimeText,
} from './styles'

interface PlantProps extends RectButtonProps {
    data: {
        name: string
        photo: string
        hour: string
    }
}

export const PlantCardPrimary = ({data, ...rest} : PlantProps) => {
    return(
        <PlantContainerButton {...rest} >
            <SvgFromUri 
                uri={data.photo} 
                width={50}
                height={50}
            />
            <Title>
                {data.name}
            </Title>
            <DetailsContainer>
                <TimeLabel>
                    Regar às
                </TimeLabel>
                <TimeText>
                    {data.hour}
                </TimeText>
            </DetailsContainer>
        </PlantContainerButton>
    )
}

export default PlantCardPrimary