"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShortLinkController_1 = __importDefault(require("./controllers/ShortLinkController"));
var router = (0, express_1.Router)();
router.post("/create", ShortLinkController_1.default.create);
router.get("/:hash", ShortLinkController_1.default.redirect);
exports.default = router;
