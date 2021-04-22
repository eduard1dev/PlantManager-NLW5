import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
    Welcome,
    Confirmation,
    UserIdentification,
    PlantSelect,
} from '../pages'
import { colors } from '../styles'


const Stack = createStackNavigator()

const StackRoutes: React.FC = () => (
        <Stack.Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: colors.white
                }
            }}
            initialRouteName='PlantSelect'
        >
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Confirmation' component={Confirmation}/>
            <Stack.Screen name='UserIdentification' component={UserIdentification}/>
            <Stack.Screen name='PlantSelect' component={PlantSelect}/>
        </Stack.Navigator>
)

export default StackRoutes