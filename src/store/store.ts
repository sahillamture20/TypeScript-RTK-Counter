import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
    count: number
}

const initialState: StateType = {
    count: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export const store = configureStore({ reducer: counterSlice.reducer});