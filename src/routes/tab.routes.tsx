import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
    colors
} from '../styles'
import { MyPlants, PlantSelect } from '../pages'
import { MaterialIcons } from '@expo/vector-icons'

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
    return(
        <AppTab.Navigator
            tabBarOptions={{
               activeTintColor: colors.green,
               inactiveTintColor: colors.heading,
               labelPosition: 'beside-icon',
               style: {
                   paddingVertical: 20,
                   height: 60,
               }
            }}
        >
            <AppTab.Screen 
                name='NovaPlanta' 
                component={PlantSelect}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons  
                            name='add-circle-outline'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen 
                name='MinhasPlantas' 
                component={MyPlants}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons  
                            name='format-list-bulleted'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes