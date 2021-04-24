import React, { useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'

import Routes from './src/routes'
import { PlantProps } from './src/libs/storage'

export default function App() {
  const [ fontLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
    async notification => {
      const data = notification.request.content.data.plant as PlantProps
    })
    return () => subscription.remove()
  })

  if(!fontLoaded){
    return <AppLoading/>
  }

  return (
    <Routes/>
  )
}