"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv/config');
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var path_1 = require("path");
require("./database");
var app = (0, express_1.default)();
app.use(express_1.default.static((0, path_1.resolve)(__dirname, "../public")));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(process.env.PORT);
