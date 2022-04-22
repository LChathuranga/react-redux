const { configureStore, createSlice } = require("@reduxjs/toolkit");{}

const counterSlise = createSlice({
    name: 'counter',
    initialState:{counter: 0},
    reducers: {
        increment(state, action){
            state.counter++
        },
        decrement(state, action){
            state.counter--
        },
        add(state, action){
            state.counter += action.payload
        }
    }
})

export const actions = counterSlise.actions

const store = configureStore({
    reducer: counterSlise.reducer
})

export default store