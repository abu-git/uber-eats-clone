import { View, Text, ScrollView } from 'react-native'
import { Divider } from '@rneui/themed'
import React from 'react'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default function RestaurantDetail() {
    return (
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            
            <MenuItems />
            
        </View>
    )
}