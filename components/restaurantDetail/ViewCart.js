import { View, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../../features/counter/counterSlice'

export default function ViewCart() {

    const items = useSelector((state) => selectItems(state))
    let total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    //console.log(JSON.stringify(items), "items")

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })

    console.log(totalUSD)


    return (
        <>
            {total ? (
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    justifyContent: "center",
                    bottom: 340,
                    zIndex: 999,
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            padding: 15,
                            borderRadius: 30,
                            width: 300,
                            position: "relative"
                        }}>
                            <Text style={{ color: "white", fontSize: 20, marginRight: 40 }}>View Cart</Text>
                            <Text style={{ color: "white", fontSize: 18 }}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            ) : (
                <></>
            )}
            

            
        </>
        
    )
}