import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {
      
      const index = state.items.findIndex((item)=> item.id === action.payload.id)
   
      let newBaset = [...state.items]
      if(index >=0){
        newBaset.splice(index,1)

      }else{
        console.warn(`cant remove product of ${action.payload.id}`)
      }
      state.items = newBaset;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems =(state)=>state.basket.items;
export const selectBasketItemsWithId =(state, id)=>state.basket.items.filter((item)=> item.id === id)
export const selectBasetTotal = (state) => state.basket.items.reduce((total ,item)=>total += item.price,0)
export default basketSlice.reducer