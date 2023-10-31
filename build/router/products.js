"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("../controllers/products"));
const router = (0, express_1.Router)();
const productController = new products_1.default();
router.get('/', productController.getAllProducts);
exports.default = router;
