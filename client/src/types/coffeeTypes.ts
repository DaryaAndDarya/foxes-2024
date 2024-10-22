import type { z } from 'zod';
import type CoffeeSchema from '../utils/validators';

export type CoffeeTypeDb = z.infer<typeof CoffeeSchema>;

export type CoffeeTypeForm = Omit<CoffeeTypeDb, 'id'>; 


