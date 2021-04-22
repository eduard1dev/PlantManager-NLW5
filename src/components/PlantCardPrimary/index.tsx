import React from 'react'
import {

} from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import {
    PlantContainerButton,
    Title
} from './styles'

interface PlantProps extends RectButtonProps {
    data: {
        name: string
        photo: string
    }
}

export const PlantCardPrimary = ({data, ...rest} : PlantProps) => {
    return(
        <PlantContainerButton>
            <SvgFromUri 
                uri={data.photo} 
                width={70}
                height={70}
            />
            <Title>
                {data.name}
            </Title>
        </PlantContainerButton>
    )
}

export default PlantCardPrimary