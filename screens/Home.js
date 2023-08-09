import { View, Text, ScrollView, Dimensions, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import Constants from 'expo-constants'
import { Divider } from '@rneui/themed'
import BottomTabs from '../components/home/BottomTabs'



const YELP_API_KEY = "1bEsO0nUS6Gd8UORNsQYfCzQ85ylHAO4B6NRA4loJ8UxZRvHEhNP6NKXmuMARDMGZH-fCPX40SL5XMWvVal5J2DW-NSY3FlI7bBhimW6ogZavuRKOKVmN3AWfqrBZHYx"

const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("San Diego")
    const [activeTab, setActiveTab] = useState("Delivery")

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
                if(json.businesses) setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())))
                else{
                    setCity("San Diego")
                }
            })
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab])
    

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', height: Dimensions.get("screen").height}}>
            <View style={{/* marginTop: Constants.statusBarHeight*/}}>
                <View style={{ backgroundColor: "white", padding: 15 }}>
                    <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                    <SearchBar cityHandler={setCity} />
                </View> 
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <View style={{ marginBottom: Dimensions.get("screen").height - Dimensions.get('window').height - StatusBar.currentHeight }}>{/* added to fix bottom tab from hiding behind android navigation */}
                <Divider width={1} />
                <BottomTabs />
            </View>
            
        </SafeAreaView>
    )
}

export default Home