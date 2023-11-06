import express from 'express';
import { SneakersController } from '../../entities/items/sneakers/controllers';

const router = express.Router();

router.post('/add', SneakersController.Create);
router.get('/getAll', SneakersController.All)
router.delete('/delete', SneakersController.Delete)

export default router;
