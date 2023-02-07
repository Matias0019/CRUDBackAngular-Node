"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorUser = exports.schemaValidation = void 0;
const zod_1 = require("zod");
const productjoi_schema_1 = require("../schemas/productjoi.schema");
const schemaValidation = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res
                .status(400)
                .json(error.issues.map((issue) => ({ path: issue.path, message: issue.message })));
        }
        return res.status(400).json({ message: "internal server error" });
    }
};
exports.schemaValidation = schemaValidation;
const validatorUser = (req, res, next) => {
    var _a;
    if (productjoi_schema_1.createUserSchema.validate(req.body).error) {
        res.status(400).send({ message: (_a = productjoi_schema_1.createUserSchema.validate(req.body).error) === null || _a === void 0 ? void 0 : _a.message });
    }
    else {
        next();
    }
};
exports.validatorUser = validatorUser;
