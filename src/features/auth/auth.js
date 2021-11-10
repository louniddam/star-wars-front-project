import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    xsrfToken: "",
    accessToken: "",
    refreshToken: "",
    // username: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        xsrfToken: (state, action) => {
            state.xsrfToken = action.payload
        },
        accessToken: (state, action) => {
            state.accessToken = action.payload
        },
        refreshToken: (state, action) => {
            state.refreshToken = action.payload
        }
    }
})

export const { xsrfToken, accessToken, refreshToken } = authSlice.actions
export default authSlice.reducer