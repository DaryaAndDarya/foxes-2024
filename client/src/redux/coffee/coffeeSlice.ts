import { createSlice } from '@reduxjs/toolkit';
import type { CoffeeTypeDb } from '../../types/coffeeTypes';
import { addCoffeeThunk, deleteCoffeeThunk, getCoffeeThunk } from './coffeeThunk';

type InitialStateType = {
  coffee: CoffeeTypeDb[];
  selectedCoffee: CoffeeTypeDb[];
  currentCoffee: CoffeeTypeDb | null;
};

const initialState: InitialStateType = {
  coffee: [],
  selectedCoffee: [],
  currentCoffee: null,
};

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    addSelectedCoffee: (state, { payload }: { payload: CoffeeTypeDb }) => {
      if (state.selectedCoffee.some((el) => el.id === payload.id)) {
        return;
      }
      state.selectedCoffee.push(payload);
    },
    deleteSelectedCoffee: (state, { payload }) => {
      const index = state.selectedCoffee.findIndex((el) => el.id === payload);
      state.selectedCoffee.splice(index, 1);
    },
    setModal: (state, { payload }) => {
      const index = state.coffee.findIndex((el) => el.title === payload.coffeeType);
      state.currentCoffee = state.coffee[index];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCoffeeThunk.fulfilled, (state, { payload }) => {
      state.coffee = payload;
    });
    builder.addCase(addCoffeeThunk.fulfilled, (state, { payload }) => {
      state.coffee.push(payload);
    });
    builder.addCase(deleteCoffeeThunk.fulfilled, (state, { payload }) => {
      const index = state.coffee.findIndex((el) => el.id === payload);
      state.coffee.splice(index, 1);
    });
  },
});

export const { addSelectedCoffee, deleteSelectedCoffee, setModal } = coffeeSlice.actions;
export default coffeeSlice.reducer;
