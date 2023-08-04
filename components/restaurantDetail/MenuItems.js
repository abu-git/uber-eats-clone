import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from '@rneui/themed'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"

//Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, selectItems } from '../../features/counter/counterSlice'

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    },
    container: {
        minHeight: "100%" //this fixed scroll view issues
    }
})

export default function MenuItems({ restaurantName, foods, hideCheckbox, marginLeft }) {
    const cartItems = useSelector((state) => selectItems(state))
    const dispatch = useDispatch()
    const selectItem = (item, checkboxValue) => {
        if(checkboxValue) dispatch(addToCart({...item, restaurantName: restaurantName, checkboxValue: checkboxValue }))
        else dispatch(removeFromCart({...item, restaurantName: restaurantName, checkboxValue: checkboxValue }))
        
    }
    //console.log(foods, "the foods")
    //console.log(cartItems, "the  cart")
    const isFoodInCart = (food, cartItems) => {
        return Boolean(cartItems.find((item) => item.title === food.title))
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        {hideCheckbox ? (<></>) : (<BouncyCheckbox 
                            iconStyle={{ borderColor: "lightgray", borderRadius: 0}} 
                            fillColor='green' 
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            isChecked={isFoodInCart(food, cartItems)}
                        />)}
                        <FoodInfo food={food} />
                        <FoodImage food={food} marginLeft={marginLeft ? marginLeft: 0} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = ({marginLeft, ...props}) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ width: 80, height: 80, borderRadius: 8, marginLeft: marginLeft }} />
    </View>
)