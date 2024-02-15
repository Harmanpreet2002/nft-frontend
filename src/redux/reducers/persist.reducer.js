import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isUserLoggedIn: false,
    user: {
        info: {
            name: "Harmeet Singh"
        },
        token: "eyfdeajfdkaljdla22fda5fd2afd5af5da2f5a"
    }
};

const persist = createSlice({
    name: 'persist',
    initialState,
    reducers: {
        saveUser: (state, { payload }) => {
            state.isUserLoggedIn = true;
            state.user = payload;
        }
    }
});

export const { saveUser } = persist.actions;
export default persist.reducer;
