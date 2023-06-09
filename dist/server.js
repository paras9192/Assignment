"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configuration_1 = __importDefault(require("./configs/configuration"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(configuration_1.default.PORT, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=server.js.map