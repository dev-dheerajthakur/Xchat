import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const mmkvStorageSlice = createSlice({
    name: 'mmkvStorage',
    initialState,
    reducers: {
        updateToken: (state, action)=>{
            state.token = action.payload
        }
    }
});

export const { updateToken } = mmkvStorageSlice.actions;
export default mmkvStorageSlice.reducer;