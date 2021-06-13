"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categories_routes_1 = require("./categories.routes");
var routes = express_1.Router();
routes.use('/categories', categories_routes_1.categoriesRoutes);
exports.default = routes;
