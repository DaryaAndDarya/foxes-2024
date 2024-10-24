import type { AxiosInstance, AxiosResponse } from 'axios';
import type { CoffeeTypeDb, CoffeeTypeForm } from '../types/coffeeTypes';
import CoffeeSchema from '../utils/validators';
import axiosInstance from './axiosInstance';

class CoffeeService {
  constructor(private readonly client: AxiosInstance) {}

  async getCoffee(): Promise<CoffeeTypeDb[]> {
    try {
      const { data } = await this.client<CoffeeTypeDb[]>('/coffees');
      return CoffeeSchema.array().parse(data);
    } catch (error) {
      // обработка неудачного запроса и неполученных данных
      // console.log error.issues
      // повторный запрос каждые 5 секунд, пока не будет успех
      // return [];
      console.log(error);
      throw error;
    }
  }

  async addCoffee(Coffee: CoffeeTypeForm): Promise<CoffeeTypeDb> {
    const { data } = await this.client.post<CoffeeTypeDb>('/coffees', Coffee);
    return CoffeeSchema.parse(data);
  }

  async deleteCoffee(id: CoffeeTypeDb['id']): Promise<AxiosResponse> {
    return this.client.delete<AxiosResponse>(`/coffees/${id}`);
  }
}
export default new CoffeeService(axiosInstance);
