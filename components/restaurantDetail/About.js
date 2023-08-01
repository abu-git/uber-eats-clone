import { View, Text, Image } from 'react-native'
import React from 'react'



const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://insideguide.co.za/cape-town/app/uploads/2023/07/best-fireplace-restaurants.webp",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [{ title: "Thai" }, { title: "Comfort Food" }]
}
/*
const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo
const formattedCategories = categories.map((cat) => cat.title).join(' • ')
const description = `${formattedCategories} ${price ? ' • ' + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`


const image = "https://insideguide.co.za/cape-town/app/uploads/2023/07/best-fireplace-restaurants.webp"
const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai • Comfort Food • $$ • 🎫 • 4 ⭐ (2913+)"
*/


export default function About(props) {

    const { name, image, price, reviews, rating, categories } = props.route.params
    const formattedCategories = categories.map((cat) => cat.title).join(' • ')
    const description = `${formattedCategories} ${price ? ' • ' + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantName = (props) => (
    <Text 
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5
        }}
    >
        {props.description}
    </Text>
)