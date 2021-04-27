import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
    Welcome,
    Confirmation,
    UserIdentification,
    PlantSave,
} from '../pages'
import { colors } from '../styles'

import AuthRoutes from './tab.routes'


const Stack = createStackNavigator()

const StackRoutes: React.FC = () => (
        <Stack.Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: colors.white
                }
            }}
            initialRouteName='Welcome'
        >
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Confirmation' component={Confirmation}/>
            <Stack.Screen name='UserIdentification' component={UserIdentification}/>
            <Stack.Screen name='PlantSelect' component={AuthRoutes}/>
            <Stack.Screen name='PlantSave' component={PlantSave}/>
            <Stack.Screen name='MyPlants' component={AuthRoutes}/>
        </Stack.Navigator>
)

export default StackRoutes