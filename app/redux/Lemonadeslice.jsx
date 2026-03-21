import { createSlice } from '@reduxjs/toolkit'

const lemonadeSlice = createSlice({
    name: 'lemonade',
    initialState: {
        // Dine sædvanlige tal
        buyPrice: 10,
        sellPrice: 15,
        lemonades: 120,
        sold: 0,
        cash: 30,
        cost: 0,
        revenue: 0,

        // NYT - API data
        cocktails: [],    // Listen af drinks fra API
        loading: false,    // Er vi ved at hente data?
        error: null,       // Er der en fejl?
    },
    reducers: {
        // Dine gamle reducers
        buyLemon(state){
            if(state.cash < state.buyPrice) return
            state.lemonades += 1
            state.cash -= state.buyPrice
            state.cost += state.buyPrice
        },
        sellLemonade(state){
            if (state.lemonades <= 0) return
            state.lemonades -= 1
            state.sold += 1
            state.cash += state.sellPrice
            state.revenue += state.sellPrice
        },
        resetStand(state){
            state.lemonades = 0
            state.sold = 0
            state.cash = 0
            state.cost = 0
            state.revenue = 0
        },

        // NYT - For API data
        setLoading(state, action) {
            state.loading = action.payload  // true eller false
        },
        setCocktails(state, action) {
            state.cocktails = action.payload  // Listen af drinks
        },
        setError(state, action) {
            state.error = action.payload  // Fejlbesked
        },
    }
});

export const { 
    buyLemon, 
    sellLemonade, 
    resetStand,
    setLoading,     
    setCocktails,    
    setError         
} = lemonadeSlice.actions

export default lemonadeSlice.reducer