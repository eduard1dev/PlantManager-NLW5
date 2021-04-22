import React from 'react'
import {
    Text,
} from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/core'

import Button from '../../components/Button'

import {
    Container,
    Form,
    Title,
    Subtitle,

} from './styles'

interface Params {
    title: string
    subtitle: string
    buttonTitle: string
    icon: 'smile' | 'hug'
    nextScreen: string
}

const emojis = {
    hug: '😍',
    smile: '😃',
}

export default function Confimation(){
    const navigation = useNavigation()
    const routes = useRoute()

    const { 
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params

    return(
        <Container>
            <Form>
                <Text style={{fontSize:44}}>
                    {emojis[icon]}
                </Text>
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
                <Button 
                    title={buttonTitle} 
                    onPress={() => navigation.navigate(nextScreen)}
                />
            </Form>
        </Container>
    )
}