import React, { useState, useEffect } from 'react'
import {
    Image,
    FlatList,
    Text,
} from 'react-native'

import Header from '../../components/Header'
import PlantCardSecundary from '../../components/PlantCardSecundary'
import { loadPlant, PlantProps } from '../../libs/storage'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import {
    Container,
    Spotlight,
    SpotlightText,
    PlantsList,
    PlantsListTitle,
} from './styles'

import waterdrop from '../../assets/waterdrop.png'

export default function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)
    const [nextWatered, setNextWatered] = useState<string>()

    useEffect(() => {
        async function loadStorage(){
            const plantsStoraged = await loadPlant()
            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            )

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
            )
            
            setMyPlants(plantsStoraged)
            setLoading(false)
        }

        loadStorage()
    },[])


    return(
        <Container>
            <Header/>
            <Spotlight>
                <Image source={waterdrop} width={60} height={60}/>
                <SpotlightText>
                    {nextWatered}
                </SpotlightText>
            </Spotlight>
            <PlantsList>
                <PlantsListTitle>
                    Próximas regadas
                </PlantsListTitle>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardSecundary data={item}/>
                    )}
                />
            </PlantsList>
        </Container>
    )
}