import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import { 
    Platform, 
    Text, 
} from 'react-native'

import Button from '../../components/Button'

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
                    isLock={isFilled}
                    onPress={() => navigation.navigate('Confirmation')}
                />
            </Form>
        </Container>
    )
}   