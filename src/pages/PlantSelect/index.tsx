import React, { useEffect, useState }from 'react'
import {
    ActivityIndicator,
    FlatList,
    View,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { PlantProps } from '../../libs/storage'

import {
    Container,
    HeaderContainer,
    Title,
    Subtitle,
    EnviromentContainer,
    PlantListContainer,
} from './styles'

import Header from '../../components/Header'
import EnviromentButton from '../../components/EnviromentButton'
import PlantCardPrimary  from '../../components/PlantCardPrimary'
import Load from '../../components/Load'

import api from '../../services/api'
import { colors } from '../../styles'


interface EnviromentProps {
    key: string
    title: string
}

export default function PlantSelect(){
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
    const [plants, setPlants] = useState<PlantProps[]>([])
    const [enviromentSelected, setEnviromentSelected] = useState('all')
    const [fileredPlants, setFileredPlants] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)

    const navigation = useNavigation()

    function handleEnviromentSelected(enviroment: string){
        setEnviromentSelected(enviroment)

        if(enviroment === 'all'){
            return setFileredPlants(plants)
        }
        
        const filtered = plants.filter(plant => 
            plant.environments.includes(enviroment)
        )

        setFileredPlants(filtered)
    }

    async function fetchPlants(){
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
        
        if(!data){
            return setLoading(true)
        }
        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFileredPlants(oldValue => [...oldValue, ...data])
        }else {
            setPlants(data)
            setFileredPlants(data)
        }
        setLoading(false)
        setLoadingMore(false)
    }

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments?_sort=title&_order=asc')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ])
        }

        fetchEnviroment()
    }, [])

    useEffect(() => {
        fetchPlants()
    }, [])

    function handleFetchMore(distance: number) {
        if(distance < 1){
            return
        }

        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
    }

    function handlePlantSelected(plant: PlantProps){
        navigation.navigate('PlantSave', { plant })
    }

    if(loading){
        return <Load/>
    }

    return(
        <Container>
            <HeaderContainer>
                <Header/>
                <Title>
                    Em qual ambiente 
                </Title>
                <Subtitle>
                    voc?? quer colocar sua planta?
                </Subtitle>
            </HeaderContainer>
            <EnviromentContainer>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={enviroments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <EnviromentButton 
                            title={item.title} 
                            active={item.key === enviromentSelected}
                            onPress={() => handleEnviromentSelected(item.key)}
                        />
                    )}
                    contentContainerStyle={{paddingLeft: 32}}
                />
            </EnviromentContainer>  
            <PlantListContainer>
                <FlatList
                    data={fileredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardPrimary 
                            data={item} 
                            onPress={() => handlePlantSelected(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                    ListFooterComponent={
                        loadingMore
                        ? <ActivityIndicator color={colors.green}/>
                        : <></>
                    }
                />
            </PlantListContainer>
        </Container>
    )
}