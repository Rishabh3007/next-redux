import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CakeState {
    numOfCakes: number
}

const initialState : CakeState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        order: (state, action: PayloadAction<number>) => {
            state.numOfCakes -= action.payload
        },
        restock: (state, action : PayloadAction<number>) => {
            state.numOfCakes += action.payload
        }
    }
})

export const { order, restock } = cakeSlice.actions
export default cakeSlice.reducer