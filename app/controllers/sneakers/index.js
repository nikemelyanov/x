"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakersController = void 0;
const sneakers_1 = require("../../services/sneakers");
class SneakersController {
    static All(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchItem = yield sneakers_1.SneakersService.All();
            return res.status(200).json(searchItem);
        });
    }
    static Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body === undefined) {
                return console.error('ошбибка request');
            }
            const item = {
                model: req.body.model,
                price: req.body.price,
                image: req.body.image,
            };
            try {
                const createItem = yield sneakers_1.SneakersService.Create(item);
                return res.status(201).json({ message: 'товар добавлен успешно' });
            }
            catch (err) {
                console.error('не удалось добавить товар');
            }
        });
    }
    static Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body === undefined) {
                return console.error('ошбибка request');
            }
            const item = {
                model: req.body.model
            };
            try {
                const createItem = yield sneakers_1.SneakersService.Delete(item);
                return res.status(201).json({ message: 'товар удален успешно' });
            }
            catch (err) {
                console.error('не удалось удалить товар');
            }
        });
    }
}
exports.SneakersController = SneakersController;
