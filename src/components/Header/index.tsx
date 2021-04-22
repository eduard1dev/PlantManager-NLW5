import React, { useState, useEffect }from 'react'
import {
    View,
    Image,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    Container,
    TextGreating,
    TextUser,
    ImageContainer,
} from './styles'

import useImg from '../../../assets/baby-yoda.png'

export default function Header(){
    const [userName, setUserName] = useState<string>()

    useEffect(() => {
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '')
        }

        loadStorageUserName()
    }, [userName])

    return(
        <Container>
            <View>
                <TextGreating>
                    Olá,
                </TextGreating>
                <TextUser>
                    {userName}
                </TextUser>
            </View>
            <ImageContainer source={useImg}/>
        </Container>
    )
}