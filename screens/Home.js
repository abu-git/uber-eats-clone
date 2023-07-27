import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
//import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import Constants from 'expo-constants'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
//import Ionicons from '@expo/vector-icons/Ionicons'

const YELP_API_KEY = "1bEsO0nUS6Gd8UORNsQYfCzQ85ylHAO4B6NRA4loJ8UxZRvHEhNP6NKXmuMARDMGZH-fCPX40SL5XMWvVal5J2DW-NSY3FlI7bBhimW6ogZavuRKOKVmN3AWfqrBZHYx"

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    //console.log(restaurantData)
    const [city, setCity] = useState("San Diego")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        }

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(json => {
                //console.log(json)
                if(json.businesses) setRestaurantData(json.businesses)
                else{
                    setCity("San Diego")
                }
            })
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city])
    

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', height: Dimensions.get("screen").height}}>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ backgroundColor: "white", padding: 15 }}>
                    <HeaderTab />
                    <SearchBar cityHandler={setCity} />
                </View> 
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home