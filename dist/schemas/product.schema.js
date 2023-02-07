"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2),
        description: zod_1.z.string().min(3).max(256),
        price: zod_1.z.number().nonnegative(),
        stock: zod_1.z.number().nonnegative(),
    })
});
exports.updateProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2),
        description: zod_1.z.string().min(3).max(256),
        price: zod_1.z.number().nonnegative(),
        stock: zod_1.z.number().nonnegative(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string().min(1),
    }),
});
