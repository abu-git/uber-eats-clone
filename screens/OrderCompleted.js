import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectRestaurantName } from '../features/counter/counterSlice'

export default function OrderCompleted() {
    const restaurantName = useSelector((state) => selectRestaurantName(state)) 
    const items = useSelector((state) => selectItems(state))
    let total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    //console.log(JSON.stringify(items), "items")
    //console.log(restaurantName)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Text>Your order at {restaurantName} has been placed for {totalUSD}</Text>
        </SafeAreaView>
    )
}