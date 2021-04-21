import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { 
    Image, 
    StatusBar, 
    Dimensions,
} from 'react-native'

import wateringImg from '../../assets/watering.png'
import { Entypo } from '@expo/vector-icons'

import {
    Container,
    Title,
    Subtitle,
    Button,
} from './styles'


export default function Welcome(){
    const navigation = useNavigation()

    return(
        <Container>
            <StatusBar 
                hidden={false} 
                barStyle={'dark-content'} 
                backgroundColor={'white'}
            />
            <Title>
                Gerencie {'\n'} suas plantas de {'\n'} forma fácil
            </Title>
            <Image 
                source={wateringImg} 
                resizeMode={'contain'} 
                style={{height: Dimensions.get('window').width * 0.7}}
            />
            <Subtitle>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Subtitle>
            <Button 
                activeOpacity={0.7} 
                onPress={() => navigation.navigate('UserIdentification')}
            >
                <Entypo 
                    name='chevron-right' 
                    size={30} 
                    color='white'
                />
            </Button>
        </Container>
    )
}