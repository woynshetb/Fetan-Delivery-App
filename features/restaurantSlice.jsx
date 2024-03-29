import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: {
    id:null,
    imgUrl:null,
    title:null,
    rating:null,
    genre:null,
    address:null,
    short_description:null,
    dishes:null,
    long:null,
    lat:null
            
  },
}

export const restaurantSlice = createSlice({
  name: 'retaurant',
  initialState,
  reducers: {
    setRestaurant:(state,action)=>{
        state.restaurant = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions
export const selectResturant =(state)=>state.restaurant.restaurant;
export default restaurantSlice.reducer