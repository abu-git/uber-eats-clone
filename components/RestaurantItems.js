import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Remo's Beach Bar",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/25/ae/94/d7/quills-restaurant.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 3120,
        rating: 4.6
    },
    {
        name: "Paul's Cafe",
        image_url: "https://www.eatout.co.za/wp-content/uploads/2021/10/featured-image.jpg.png",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 125,
        rating: 4.7
    },
    {
        name: "Lionel's Braai Exotic",
        image_url: "https://lh3.googleusercontent.com/cuFE7-K_kMnB2LQZGqJqZgISMQvAGiUaf7sRJAPk1ZV5Rz5amtLzByzyy3Pfw1V9StMxrbDo5hWifnIB6sUOX2_6heaRR6Vrpn_ECA=s1500",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 3500,
        rating: 4.5
    },
    {
        name: "Winston's Southside Deluxe",
        image_url: "https://image-prod.iol.co.za/resize/650x366/Black-Bistro-Lounge-and-Cocktail-Kitchen-Picture-Supplied?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/284694cb-4e91-54ef-b7c1-58e81fd03ca6&operation=CROP&offset=0x25&resize=1098x618",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1277,
        rating: 4.5
    },
];


export default function RestaurantItems (props){
    //console.log(localRestaurants)
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index}
                    style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
            
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image  
            source={{
                uri: props.image
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View 
        style={{ 
            flexDirection: "row", 
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30 - 45 ~ min</Text>
        </View>
        
        <View 
            style={{ 
                backgroundColor: "#eee", 
                height: 30, 
                width: 30, 
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15
            }}>
                <Text>{props.rating}</Text>
        </View>
    </View>
    
)
