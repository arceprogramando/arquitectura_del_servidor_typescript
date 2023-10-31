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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_HOST, DB_PORT, DB_NAME, DB_CNN } = process.env;
const configConnection = {
    url: (_a = `${DB_CNN}${DB_NAME}`) !== null && _a !== void 0 ? _a : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
};
console.log(configConnection.url);
const mongoDBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield mongoose_1.default.connect(configConnection.url)
        .then((connect) => connect.connection)
        .catch((error) => {
        throw error;
    });
});
exports.default = mongoDBConnection;
