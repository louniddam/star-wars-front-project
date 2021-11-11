import { configureStore } from '@reduxjs/toolkit'
import authSliceRducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceRducer
  },
})