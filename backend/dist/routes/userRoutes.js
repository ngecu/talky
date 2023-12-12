"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const user_router = (0, express_1.Router)();
user_router.post('/register', userController_1.registerUser);
user_router.post('/login', userController_1.loginUser);
user_router.post('/toggleFollowUser', userController_1.toggleFollowUser);
exports.default = user_router;