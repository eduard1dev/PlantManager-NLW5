import React from 'react'
import {
    Text,
} from 'react-native'

import Button from '../../components/Button'

import {
    Container,
    Form,
    Title,
    Subtitle,

} from './styles'

export default function Confimation(){
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
                />
            </Form>
        </Container>
    )
}