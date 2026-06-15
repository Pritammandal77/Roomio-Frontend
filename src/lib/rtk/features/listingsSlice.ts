import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListingsState {
    hasListingsFetched: boolean;
    listingsData: any[] | null;
}

const initialState: ListingsState = {
    hasListingsFetched: false,
    listingsData: null,
};

const listingSlice = createSlice({
    name: "listing",
    initialState,
    reducers: {
        setListingsData: (state, action: PayloadAction<any[]>) => {
            state.listingsData = action.payload;
            state.hasListingsFetched = true;
        },
    },
});

export const { setListingsData } = listingSlice.actions;
export default listingSlice.reducer;