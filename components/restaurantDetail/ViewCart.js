import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectRestaurantName } from '../../features/counter/counterSlice'
import OrderItem from './OrderItem'


export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false)
    const restaurantName = useSelector((state) => selectRestaurantName(state)) 
    const items = useSelector((state) => selectItems(state))
    let total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    //console.log(JSON.stringify(items), "items")
    console.log(restaurantName)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })

    console.log(totalUSD)

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)"
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10
        }
    })

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative"
                                }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text style={{ position: "absolute", right: 20, color: "white", fontSize: 15, top: 17 }}>{ total ? totalUSD : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    /*
    const checkoutModalContent = () => {
        return (
            <View style={{ 
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
            }}>
                <View style={{ backgroundColor: "black",
                    padding: 10,
                    borderRadius: 30,
                    width: 150,
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{ color: "white"}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }*/


    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                {checkoutModalContent()}
            </Modal>
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
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={{
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