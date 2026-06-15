import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import listingReducer from './features/listingsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        listing: listingReducer
    },
});

// Types (VERY IMPORTANT for TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;