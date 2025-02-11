import { createSlice } from "@reduxjs/toolkit";
import { MMKVLoader } from "react-native-mmkv-storage";

const initialState = new MMKVLoader().initialize();

const mmkvStorageSlice = createSlice({
    name: 'mmkvStorage',
    initialState,
    reducers: {}
});

export const { } = mmkvStorageSlice.actions;
export default mmkvStorageSlice.reducer;