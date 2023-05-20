"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
// https://stackoverflow.com/questions/9874382/whats-the-difference-between-process-cwd-vs-dirname
// process.cwd() -> <some-path>/lokal-marketplace-app
// __dirname -> <some-path>/lokal-marketplace-app/dist/configs/
// .env files are not available in dist folder. Hence using process.cwd()
dotenv.config({
    path: path_1.default.resolve(process.cwd(), `./configs/.${process.env.NODE_ENV}.env`),
});
exports.default = {
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 3000,
    EMAIL_PROVIDER: {
        USERNAME: process.env.EMAIL_PROVIDER_USERNAME,
        PASSWORD: process.env.EMAIL_PROVIDER_PASSWORD,
    },
};
//# sourceMappingURL=configuration.js.map