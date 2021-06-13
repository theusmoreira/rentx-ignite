"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var uuid_1 = require("uuid");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
var categories = [];
categoriesRoutes.post('/', function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    var category = {
        id: uuid_1.v4(),
        name: name,
        description: description,
        created_at: new Date(),
    };
    categories.push(category);
    return response.status(201).json(category);
});
