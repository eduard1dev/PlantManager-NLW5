import React from 'react'
import {
    View,
} from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

import { SvgFromUri } from 'react-native-svg'


import {
    PlantContainerButton,
    Title,
    DetailsContainer,
    TimeLabel,
    TimeText,
    RemoveButton,
} from './styles'

import { colors } from '../../styles'

interface PlantProps extends RectButtonProps {
    data: {
        name: string
        photo: string
        hour: string
    }
    handleRemove: () => void
}

export const PlantCardPrimary = ({data, handleRemove, ...rest} : PlantProps) => {
    return(
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RemoveButton
                            onPress={handleRemove}
                        >
                            <Feather name='trash' size={32} color={colors.white} />
                        </RemoveButton>
                    </View>
                </Animated.View>
            )}
        >
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
        </Swipeable>
    )
}

export default PlantCardPrimary