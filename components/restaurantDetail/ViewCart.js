import { View, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import React from 'react'

export default function ViewCart() {
    return (
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
                    alignItems: "center",
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                    position: "relative"
                }}>
                    <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}