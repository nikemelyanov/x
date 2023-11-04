"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../entities/items/sneakers/controllers");
const router = express_1.default.Router();
router.post('/add', controllers_1.SneakersController.Create);
router.get('/getAll', controllers_1.SneakersController.All);
router.delete('/delete', controllers_1.SneakersController.Delete);
exports.default = router;
