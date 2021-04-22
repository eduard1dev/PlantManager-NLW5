import React from 'react'
import {

} from 'react-native'
import LottieView from 'lottie-react-native'

import loadAnimation from '../../assets/load.json'

import {
    Container,
} from './styles'

export default function Load(){
    return(
        <Container>
            <LottieView
                style={{backgroundColor: 'transparent', height: 200, width: 200}}
                source={loadAnimation}
                autoPlay
                loop
            />
        </Container>
    )
}