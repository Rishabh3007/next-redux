import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import usersReducer from "./features/users/usersSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cake: cakeReducer,
            users: usersReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']