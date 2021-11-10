import { configureStore } from '@reduxjs/toolkit'
import authSliceRducer from './features/auth/auth'

export const store = configureStore({
  reducer: {
    auth: authSliceRducer
  },
})