import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from '@rneui/themed'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2F2832f13af92f5bcf3ef860796044d2355e770c03"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off",
        price: "$19.20",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_onETr3aMPQd4ORaj-TSXN7gwH-p5R88xA&usqp=CAU"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. This is a delicious mexican dish",
        price: "$14.50",
        image: "https://img.taste.com.au/0gfNs9up/w1200-h630-cfill/taste/2018/02/breakfast-chilaquiles-135402-1.jpg"
    },
    {
        title: "Chicken Caesar Salad",
        description: "One can never go wrong with chicken caesar salad",
        price: "$21.50",
        image: "https://img.taste.com.au/oMBGDey1/taste/2017/01/chicken-caesar-salad-with-a-twist_1980x1320-119937-1.jpg"
    }
]

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

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox iconStyle={{ borderColor: "lightgray", borderRadius: 0}} fillColor='green' />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
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

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ width: 80, height: 80, borderRadius: 8}} />
    </View>
)