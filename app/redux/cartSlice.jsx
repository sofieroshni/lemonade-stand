import { createSlice } from '@reduxjs/toolkit'

const DRINK_PRICE = 50
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        boughtItems: []
    },
    reducers: {
        addTooCart(state, action) {
          const existing = state.cartItems.find(i => i.idDrink === action.payload.idDrink) 
      
          if (existing) {
            existing.quantity += 1
          } else {
            state.cartItems.push({...action.payload, price: 50, quantity: 1})
          }
        },
      
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(i => i.idDrink !== action.payload)
        },
        
        updateQuantity(state, action) {
            const item = state.cartItems.find(i => i.idDrink === action.payload.idDrink)
            if(item) item.quantity = action.payload.quantity
        },

        buyAll(state) {
          const total = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
          console.log(`Total køb: ${total} kr`)

          // min items fra kurven skal pushes ind i min array der hedder boughtItems så 
          // aå jeg kan vise den i min checkoutSiude
          state.boughtItems.push({
              timestamp: new Date().toLocaleString(),
              items: [...state.cartItems],
              total: total
          })

          state.cartItems = []
        }
    }
})

export const { addTooCart, removeItem, updateQuantity, buyAll } = cartSlice.actions
export default cartSlice.reducer

// // HVAD ER i OG action.payload.idDrink?

// "når vi skriver state.items.find(i => ...), er i en loop-variabel."
// Analogi:
// "Forestil dig at du går gennem en række kasser med drinks. i repræsenterer HVER KASSE mens du går gennem dem."
// javascriptstate.items = [
//   { idDrink: 1, name: 'Lemon Drop', quantity: 1 },  ← i er denne her
//   { idDrink: 2, name: 'Margarita', quantity: 1 },   ← eller denne
//   { idDrink: 3, name: 'Mojito', quantity: 1 }       ← eller denne
// ]

// find(i => ...) betyder: "Tjek HVER drinks objekt, jeg kalder det 'i'"