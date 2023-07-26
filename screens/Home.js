import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
//import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'
import Constants from 'expo-constants'
import Ionicons from '@expo/vector-icons/Ionicons'

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', height: Dimensions.get("screen").height}}>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ backgroundColor: "white", padding: 15 }}>
                    <HeaderTab />
                    <SearchBar />
                </View> 
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems />
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home