import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

//Redux imports
import store from './store'
import { Provider } from 'react-redux'

export default function RootNavigation() {
    const Stack = createStackNavigator()

    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                </Stack.Navigator>
            </Provider>   
        </NavigationContainer>
    )
}