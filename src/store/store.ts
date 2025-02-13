import { configureStore } from '@reduxjs/toolkit'
import mmkvStorageReducer from './states/mmkvStorageSlice'
import socketReducer from './states/socketSlice'

export const store = configureStore({
  reducer: {
    mmkvStorage: mmkvStorageReducer,
    socket: socketReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch