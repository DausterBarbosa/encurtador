"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    original_link: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },
    short_link: {
        type: String,
        required: true,
    }
});
var ShortLink = (0, mongoose_1.model)("ShortLink", schema);
exports.default = ShortLink;
