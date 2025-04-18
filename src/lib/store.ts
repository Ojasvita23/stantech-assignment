import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './features/users/userSlice'
import usersDetailReducer from './features/users/userDetailSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userDetail: usersDetailReducer,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch