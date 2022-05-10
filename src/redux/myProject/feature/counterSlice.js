import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'metrics',
    initialState: {
        value: 0,
        arr:[]
    },
    reducers: {
        addMetric: (state, action) => {
            state.arr.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addMetric } = counterSlice.actions

export default counterSlice.reducer