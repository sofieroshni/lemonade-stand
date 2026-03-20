import { createSlice } from '@reduxjs/toolkit'

const lemonadeSlice = createSlice({
    name: 'lemonade',
    initialState: {
        buyPrice: 10,
        sellPrice: 15,
        lemonades: 120,
        sold: 0,
        cash: 30,
        cost: 0, // ti at starte med nul
        revenue: 0,
    },
    reducers: {
        buyLemon(state){
            if(state.cash < state.buyPrice) return // hvis state.mængden af cash er mindre end buyPrice har man ikke råd, stop
            state.lemonades += 1 // ellers skal state.lemonades stige med 1
            state.cash -= state.buyPrice // købsprisen trækkes fra cash
            state.cost += state.buyPrice // købsprisen lægges sammen med omsætningen

        },
        sellLemonade(state){
            if (state.lemonades <= 0) return // er der ikke flere lemonades skal den stoppe
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
        }
    }
});

// export const { buyLemon, sellLemonade, resetStand } = lemonadeSlice.actions //eksporterer dem så jeg kan bruge dem i min
// export default lemonadeSlice.reducer
// chat gpt: 
export const { buyLemon, sellLemonade, resetStand } = lemonadeSlice.actions
export default lemonadeSlice.reducer
//chat gpt end

// createSlice laver automatisk både actions og reducers 
// initialState er de samme værdier som lærerens context-fil startede med
// Hver funktion i reducers svarer til en handling brugeren kan gøre