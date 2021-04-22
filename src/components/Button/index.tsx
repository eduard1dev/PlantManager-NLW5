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
}

export default function Button({title, ...rest}: ButtonProps){
    return(
    <Container activeOpacity={0.7} {...rest} >
        <Title>
            {title}
        </Title>
    </Container>
    )
}