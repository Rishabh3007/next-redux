import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
    id: number
    name: string
}

interface UsersState {
    loading: boolean,
    users: User[],
    error: string | null
}

const initialState : UsersState = {
    loading: false,
    users: [],
    error: null
}

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || null
        })
    }
})

export default usersSlice.reducer
export { fetchUsers }