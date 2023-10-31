"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const mongoconnection_1 = __importDefault(require("./databases/mongoconnection"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const NODE_ENV = process.env.NODE_ENV;
const PERSISTENCE = process.env.PERSISTENCE;
app.use(express_1.default.json());
app.listen(PORT, () => {
    (0, mongoconnection_1.default)()
        .then(() => {
        console.log(`=Encendido servidor en puerto ${PORT}= \n====== ${BASE_URL} ${PORT}/ =====`);
        console.log(`==========ENV:${NODE_ENV}===========`);
        console.log(`=======PERSISTENCE:${PERSISTENCE}=============`);
        console.log(`=======PROCESS:${process.pid}=============`);
        (0, express_routemap_1.default)(app);
    })
        .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
});
