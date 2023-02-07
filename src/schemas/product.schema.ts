import { z } from "zod";

export const createProductSchema = z.object({
    body: z.object({
        name: z.string().min(2),
        description: z.string().min(3).max(256),
        price: z.number().nonnegative(),
        stock: z.number().nonnegative(),
    })
});

export const updateProductSchema = z.object({
    body: z.object({
        name: z.string().min(2),
        description: z.string().min(3).max(256),
        price: z.number().nonnegative(),
        stock: z.number().nonnegative(),
    }),
    params: z.object({
        id: z.string().min(1),
    }),
});