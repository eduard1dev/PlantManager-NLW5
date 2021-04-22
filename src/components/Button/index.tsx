import React from 'react'
import { 
    View,
    TouchableOpacityProps
 } from 'react-native'

import {
    Container,
    Title,
} from './styles'

interface ButtonProps extends TouchableOpacityProps{
    title: string
    isLock?: boolean
}

export default function Button({title, isLock, ...rest}: ButtonProps){
    return(
    <View style={{opacity: isLock ? 1 : 0.5, width: '100%'}}>
        <Container activeOpacity={0.7} {...rest} >
            <Title>
                {title}
            </Title>
        </Container>
    </View>
    )
}