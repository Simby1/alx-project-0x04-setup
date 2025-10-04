import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Define the counter slice using createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      // Ensure count does not go below 0
      state.value > 0 ? state.value -= 1 : 0
    }
    // You could also add reset for demonstration
    // reset: (state) => { state.value = 0 }
  }
});


// Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer // Add the counter reducer
  }
})

// Export the actions for dispatching
export const { increment, decrement } = counterSlice.actions

// Define RootState and AppDispatch types for type safety
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom hook to use AppDispatch with correct typing
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
