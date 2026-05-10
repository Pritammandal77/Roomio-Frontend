// import { User } from "@/types/user";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface UserState {
//     userData: User | null;
//     isLoggedIn: boolean;
// }

// const initialState: UserState = {
//     userData: null,
//     isLoggedIn: false,
// };

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setUser: (state, action: PayloadAction<User>) => {
//             state.userData = action.payload;
//             state.isLoggedIn = true;
//         },
//         removeUserData: (state, action: PayloadAction<void>) => {
//             state.userData = null;
//         },
//         logout: (state) => {
//             state.userData = null;
//             state.isLoggedIn = false;
//         },
//     },
// });

// export const { setUser, logout, removeUserData } = userSlice.actions;
// export default userSlice.reducer;




// new code for protected route

import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    userData: User | null;
    isLoggedIn: boolean;
    loading: boolean; // Tracking initial auth check
}

const initialState: UserState = {
    userData: null,
    isLoggedIn: false,
    loading: true, // Start as TRUE to prevent accidental redirects
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
            state.loading = false; // Check complete, user found
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload; // Manual control for loading
        },
        logout: (state) => {
            state.userData = null;
            state.isLoggedIn = false;
            state.loading = false;
        },
         removeUserData: (state, action: PayloadAction<void>) => {
            state.userData = null;
        },
    },
});

export const { setUser, logout, setLoading, removeUserData } = userSlice.actions;
export default userSlice.reducer;