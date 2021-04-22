import React, { useState } from 'react'
import {
    Alert,
    Image,
    Platform,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { SvgFromUri } from 'react-native-svg'
import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
import { PlantProps, savePlant, loadPlant } from '../../libs/storage'

import { isBefore, format } from 'date-fns'

import Button from '../../components/Button'

import {
    Container,
    PlantInfoContainer,
    Title,
    TextAbout,
    ControllerContainer,
    TipContainer,
    TipText,
    AlertLabel,
    TimePickerButton,
    TimePickerButtonText,
} from './styles'

import waterdrop from '../../assets/waterdrop.png'

interface Params {
    plant: PlantProps
}

export default function PlantSave(){
    const route = useRoute()
    const { plant } = route.params as Params

    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

    const navigation = useNavigation()

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState)
        }
        
        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date())
            return Alert.alert('Escolha uma hora no futuro!')
        }

        if(dateTime){
            setSelectedDateTime(dateTime)
        }
    }

    function handleOpenDataTimePickerForAndroid(){
        setShowDatePicker(oldState => !oldState)
    }

    async function handleSave(){
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            })

            navigation.navigate('Confirmation', {
                title: 'Tudo certo!',
                subtitle: 'Agora sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
                buttonTitle: 'Muito Obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants'
            })
        } catch {
            Alert.alert('Não foi possível salvar. :(')
        }
    }

    return(
        <Container>
            <PlantInfoContainer contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <SvgFromUri uri={plant.photo}/>
                <Title>
                    {plant.name}
                </Title>
                <TextAbout> 
                    {plant.about}
                </TextAbout>
            </PlantInfoContainer>
            <ControllerContainer>
                <TipContainer>
                    <Image
                        source={waterdrop}
                        width={56}
                        height={56}
                    />
                    <TipText>
                        {plant.water_tips} 
                    </TipText>
                </TipContainer>
                {   
                    showDatePicker && (
                        <DateTimePicker 
                            value={selectedDateTime} 
                            mode='time'
                            display='spinner'
                            onChange={handleChangeTime}
                        />
                    )
                }
                {
                    Platform.OS === 'android' && (
                        <TimePickerButton onPress={handleOpenDataTimePickerForAndroid}>
                            <TimePickerButtonText>
                                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                            </TimePickerButtonText>
                        </TimePickerButton>
                    )
                }
                <AlertLabel>
                    Escolha o melhor horário para ser lembrado.
                </AlertLabel>
                <Button
                    title='Cadastrar uma planta'
                    onPress={handleSave}
                />
            </ControllerContainer>
        </Container>
    )
}