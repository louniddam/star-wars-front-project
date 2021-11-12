import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authSliceRducer from './features/auth/authSlice'
import { starwarsApi } from './features/starwars/apiSlice'


export const store = configureStore({
  reducer: {
    auth: authSliceRducer,
    [starwarsApi.reducerPath]: starwarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starwarsApi.middleware),
})

// setupListeners(store.dispatch)