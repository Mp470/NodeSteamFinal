import { StoreServie } from '../../services/store/StoreServie';
import { Request, Response } from 'express';

class StoreController {
  constructor(private readonly storeServie: StoreServie) {}

  async handlerCreateWeek(request: Request, response: Response) {
    const data = request.body;

    const createWeek = await this.storeServie.createWeekDeal(data);
    console.log(createWeek);

    return response.json(createWeek);
  }

  async handlerGetWeekDeal(request: Request, response: Response) {
    const { id } = request.params;

    const getWeek = await this.storeServie.getWeekDeals(id);

    return response.json(getWeek);
  }

  async handlerDeleteWeekDeal(request: Request, response: Response) {
    const { id } = request.params;
    const deleteWeek = await this.storeServie.deleteWeekDeal(id);

    return response.json(deleteWeek);
  }
}

export { StoreController };
