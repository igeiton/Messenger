import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {
            login: '',
            password: '',
            email: '',
        },
    },
    reducers: {
        login(state, action) {
            state.isAuth = action.payload.isAuth;
        },
    },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
