import {createSlice} from "@reduxjs/toolkit"

export const cartSlice= createSlice({
    name: "Cart",
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state) => {
            state.value.append({item})
        },
        deleteItem: (state) => {
            state.value.remove({item})
        }
    }

});

export const { addItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;