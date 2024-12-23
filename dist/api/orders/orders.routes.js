"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controller_1 = require("./orders.controller");
const router = (0, express_1.Router)();
router.get("/getOrders", orders_controller_1.Orders.getAllOrders);
router.get("/getClientOrders", orders_controller_1.Orders.getClientOrdersByClient);
router.post("/getClientOrdersBySeller", orders_controller_1.Orders.getAllClientOrdersBySeller);
router.post("/clientcreateorder", orders_controller_1.Orders.ClientcreateOrder);
router.post("/adminCreateOrder", orders_controller_1.Orders.AdmincreateOrder);
router.post("/createInvoice", orders_controller_1.Orders.createInvoice);
router.get("/getallInvoices", orders_controller_1.Orders.getAllInvoices);
exports.default = router;