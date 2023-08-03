import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        selectedItems: { items: [], restaurantName: "", checkboxValue: false },
    },
    reducers: {
        addToCart: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        let newState = { ...state }
        if(action.payload.checkboxValue){
            console.log("Adding to Cart...")
            //let newState = { ...state }
            //console.log(action.payload)
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.restaurantName,
                checkboxValue: action.payload.checkboxValue
            }
            //console.log(newState.selectedItems, "👉")
            state.selectedItems.items = newState.selectedItems.items
            state.selectedItems.restaurantName = newState.selectedItems.restaurantName
            state.selectedItems.checkboxValue = newState.selectedItems.checkboxValue
        }
            //console.log(newState, "👉")
            //console.log(JSON.stringify(newState))
        },
        removeFromCart: (state, action) => {
            if(!action.payload.checkboxValue){
                console.log("Removing from Cart...")
                let newState = {...state}
                //console.log(JSON.stringify(newState))
                newState.selectedItems = {
                    items: [...newState.selectedItems.items.filter((item) => item.title !== action.payload.title)],
                    restaurantName: action.payload.restaurantName,
                    checkboxValue: action.payload.checkboxValue 
                }
                //console.log(newState.selectedItems, "👉")
                //console.log(JSON.stringify(newState))
                state.selectedItems.items = newState.selectedItems.items
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = counterSlice.actions

export const selectItems = (state) => state.counter.selectedItems.items

export const selectRestaurantName = (state) => state.counter.selectedItems.restaurantName

export default counterSlice.reducer