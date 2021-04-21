import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
    Welcome,
    Confirmation,
    UserIdentification,
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
        >
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Confirmation' component={Confirmation}/>
            <Stack.Screen name='UserIdentification' component={UserIdentification}/>
        </Stack.Navigator>
)

export default StackRoutes