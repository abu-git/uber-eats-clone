import { View, Text, ScrollView } from 'react-native'
import { Divider } from '@rneui/themed'
import React from 'react'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            
            <MenuItems />
            
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
            
            
        </View>
    )
}