import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    xsrfToken: "",
    accessToken: "",
    refreshToken: "",
    userInfos: {
        username: "",
        firstname: "",
        email: "",
    }
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
        },
        userInfos: (state, action) => {
            state.userInfos.username = action.payload.username
            state.userInfos.firstname = action.payload.firstname
            state.userInfos.lastname = action.payload.lastname
            state.userInfos.email = action.payload.email
        }
    }
})

export const { xsrfToken, accessToken, refreshToken, userInfos } = authSlice.actions
export default authSlice.reducer