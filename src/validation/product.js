import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({ "any.required": "Name is required field!" }),
  price: Joi.number()
    .required()
    .messages({ "any.required": "Price is required field!" }),
  category: Joi.string().valid("books", "electronics", "clothing", "other"),
  description: Joi.string(),
});
