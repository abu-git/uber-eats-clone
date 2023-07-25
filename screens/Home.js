import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTab from '../components/HeaderTab'

const Home = () => {
    return (
        <SafeAreaView>
            <HeaderTab />
        </SafeAreaView>
    )
}

export default Home