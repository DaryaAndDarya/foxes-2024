import type React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { addCoffeeThunk, deleteCoffeeThunk, getCoffeeThunk } from '../redux/coffee/coffeeThunk';
import type { CoffeeTypeDb, CoffeeTypeForm } from '../types/coffeeTypes';

type UseCoffeeTypes = {
  coffee: CoffeeTypeDb[];
  submithandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteHandler: (id: CoffeeTypeDb['id']) => void;
};
export default function useCoffee(): UseCoffeeTypes {
  const coffee = useAppSelector((store) => store.coffee.coffee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getCoffeeThunk());
  }, []);

  const submithandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.currentTarget)) as CoffeeTypeForm;
    void dispatch(addCoffeeThunk(dataForm));
  };
  const deleteHandler = (id: CoffeeTypeDb['id']) => {
    void dispatch(deleteCoffeeThunk(id));
  };
  return {
    coffee,
    submithandler,
    deleteHandler,
  };
}
