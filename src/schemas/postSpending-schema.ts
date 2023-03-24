import Joi from "joi";

//const types = ["INPUT", "OUTPUT"]
export const newSpendingSchema = Joi.object<any>({
    name: Joi.string().required(),
    value: Joi.number().required(),
    type: Joi.string().required(),
})