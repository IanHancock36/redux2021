import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
      count : 0
  },
  reducers: {
    increment: (state) => {
     state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer