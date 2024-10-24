import { createAsyncThunk } from '@reduxjs/toolkit';
import coffeeService from '../../services/coffeeService';
import type { CoffeeTypeDb, CoffeeTypeForm } from '../../types/coffeeTypes';

export const getCoffeeThunk = createAsyncThunk<CoffeeTypeDb[]>('coffees/getAll', () =>
  coffeeService.getCoffee(),
);

export const addCoffeeThunk = createAsyncThunk<CoffeeTypeDb, CoffeeTypeForm>(
  'coffees/addCoffee',
  async (dataForm, { dispatch }) => {
    try {
      const newCoffee = await coffeeService.addCoffee(dataForm);
      return newCoffee;
    } catch (error) {
      // дополнительное действие при ошибке запроса
      dispatch({ type: 'ADD_COFFEE_ERROR' });
      throw error;
    }
  },
);

export const deleteCoffeeThunk = createAsyncThunk<CoffeeTypeDb['id'], CoffeeTypeDb['id']>(
  'coffees/delete',
  async (id) => {
    await coffeeService.deleteCoffee(id);
    return id;
  },
);
