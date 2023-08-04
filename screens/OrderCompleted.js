import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectRestaurantName } from '../features/counter/counterSlice'
import LottieView from 'lottie-react-native'
import { getFirestore, collection, doc, getDoc, getDocs, query, where, limit, orderBy } from "firebase/firestore"
import app from '../firebase'
import MenuItems from '../components/restaurantDetail/MenuItems'




export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState([])
    const restaurantName = useSelector((state) => selectRestaurantName(state)) 
    const items = useSelector((state) => selectItems(state))
    let total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    //console.log(JSON.stringify(items), "items")
    //console.log(restaurantName)
    const db = getFirestore(app)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })

    

    async function getFromFirebase(){
        const db = getFirestore(app)
        //const unsub = db.collection("orders").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => { snapshot.docs.map((docc) => { setLastOrder(docc.data()) })})
        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"), limit(1))
        const querySnapshot = await getDocs(q)
        const result = []
        //console.log(querySnapshot)
        querySnapshot.forEach((docie) => {
            //console.log(docie.id, "=>", docie.data())
            //const result = []
            result.push(docie.data())
            
        })
        setLastOrder(result) // lastOrder populates later than expected
        return q
    }

    useEffect(() => {
        getFromFirebase()
        //console.log(items, "last order")
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
            <View>
                <LottieView style={{ height: 100, alignSelf: "center", marginBottom: 30 }} source={require('../assets/animations/check-mark.json')} autoPlay speed={0.5} loop={false} />
            </View> 
            <View style={{ margin: 15, alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold"}}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
            </View>  
            <ScrollView>
                <MenuItems foods={items} hideCheckbox={true} />
                
                    <LottieView style={{ height: 200, alignSelf: "center", marginBottom: 30 }} source={require('../assets/animations/cooking.json')} autoPlay speed={0.5} loop={false} />
                
            </ScrollView>
                
        </SafeAreaView>
    )
}