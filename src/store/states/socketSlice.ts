import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

interface SocketState {
    socket: Socket | null;
  }

const initialState = {
    socket: null
  };
  

const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload;  // Mutate the state directly with Immer
        }
    }
});

export const { setSocket } = socketSlice.actions;
export default socketSlice.reducer;
