import React from 'react'
import {
    Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/core'

import Button from '../../components/Button'

import {
    Container,
    Form,
    Title,
    Subtitle,

} from './styles'

export default function Confimation(){
    const navigation = useNavigation()

    return(
        <Container>
            <Form>
                <Text style={{fontSize:44}}>
                    😃
                </Text>
                <Title>
                    Prontinho!
                </Title>
                <Subtitle>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Subtitle>
                <Button 
                    title='Começar' 
                    isLock={true}
                    onPress={() => navigation.navigate('PlantSelect')}
                />
            </Form>
        </Container>
    )
}