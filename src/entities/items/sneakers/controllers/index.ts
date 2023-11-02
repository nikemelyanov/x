import { SneakersService } from '../services';

export class SneakersController {
  static async All(req: any, res: any) {
    const searchItem = await SneakersService.All();

    return res.status(200).json(searchItem);
  }

  static async Create(req: any, res: any) {
    if (req.body === undefined) {
      return console.error('ошбибка request')
    }

    const item = {
      model: req.body.model,
      price: req.body.price,
      image: req.body.image,
    };

    try {
      const createItem = await SneakersService.Create(item);

      return res.status(201).json({ message: 'товар добавлен успешно' });
    } catch (err) {
      console.error('не удалось добавить товар');
    }
  }

  static async Delete(req: any, res: any) {
    if (req.body === undefined) {
      return console.error('ошбибка request')
    }
    
    const item = {
      model: req.body.model
    };

    try {
      const createItem = await SneakersService.Delete(item);

      return res.status(201).json({ message: 'товар удален успешно' });
    } catch (err) {
      console.error('не удалось удалить товар');
    }
  }
}
