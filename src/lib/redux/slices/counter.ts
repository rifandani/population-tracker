import { createSlice } from '@reduxjs/toolkit'; // PayloadAction
// import { PURGE } from 'redux-persist/es/constants';
// files
import { RootState } from '../store';

type Counter = { count: number };

const initialState: Counter = {
  count: 0,
};

// https://redux-toolkit.js.org/api/createEntityAdapter
const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    // no-plusplus
    // no-param-reassign
    increment: state => {
      state.count++;
    },
    decrement: state => {
      state.count--;
    },
  },
  // extraReducers: builder => {
  // purge persisted state when calling persistor.purge()
  // builder.addCase(PURGE, state => {
  //   countAdapter.removeAll();
  // });
  // },
});

// selectors
export const counterSelector = (state: RootState): Counter => state.counter;

// count actions
export const { increment, decrement } = counterSlice.actions;

// count reducer
export default counterSlice.reducer;
