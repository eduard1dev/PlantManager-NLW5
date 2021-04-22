import React from 'react'
import {
    View,
    Image,
} from 'react-native'

import {
    Container,
    TextGreating,
    TextUser,
    ImageContainer,
} from './styles'

import useImg from '../../../assets/baby-yoda.png'

export default function Header(){
    return(
        <Container>
            <View>
                <TextGreating>
                    Olá,
                </TextGreating>
                <TextUser>
                    Carlos
                </TextUser>
            </View>
            <ImageContainer source={useImg}/>
        </Container>
    )
}