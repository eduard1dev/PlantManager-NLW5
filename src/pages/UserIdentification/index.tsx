import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import { 
    Platform, 
    Text,
    Alert, 
} from 'react-native'

import Button from '../../components/Button'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    Container,
    Form,
    Input,
    Title,
} from './styles'

export default function Welcome(){
    const [isFocused, setFocus] = useState(false)
    const [isFilled, setFilled] = useState(false)
    const [name, setName] = useState<string>()

    const navigation = useNavigation()

    function handleInputFocus(){
        setFocus(true)
    }

    function handleInputBlur(){
        setFocus(false)
        setFilled(!!name)
    }
    function handleInputChange(value: string){
        setFilled(!!value)
        setName(value)
    }

    async function handleSubmit(){
        if(!name){
            return Alert.alert('Digite seu nome para prosseguir')
        } else {
            try {
                await AsyncStorage.setItem('@plantmanager:user', name)
                navigation.navigate('Confirmation', {
                    title: 'Prontinho',
                    subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                    buttonTitle: 'Começar',
                    icon: 'smile',
                    nextScreen: 'PlantSelect'
                })
            } catch {
                Alert.alert('Não foi possível salvar o seu nome.')
            }
        }
    }

    return(
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Form>
                <Text style={{fontSize:44}}>
                    😃
                </Text>
                <Title>
                    Como podemos {'\n'} chamar você?
                </Title>
                <Input 
                    isFocused={isFocused} 
                    isFilled={isFilled}
                    placeholder='Digite um nome' 
                    onFocus={handleInputFocus} 
                    onBlur={handleInputBlur}
                    onChangeText={handleInputChange}
                />
                <Button 
                    title='Confirmar' 
                    onPress={() => handleSubmit()}
                />
            </Form>
        </Container>
    )
}   