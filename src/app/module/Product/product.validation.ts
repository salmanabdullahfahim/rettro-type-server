import { z } from "zod";

const createProductValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be string",
    })
    .max(20, { message: "Name can not be more than 20 characters" }),
  price: z
    .number({
      invalid_type_error: "Price must be number",
    })
    .min(1, { message: "Price can not be less than 1" }),
  description: z
    .string({
      invalid_type_error: "Description must be string",
    })
    .max(100, { message: "Description can not be more than 100 characters" }),
  availableQuantity: z
    .number({
      invalid_type_error: "Available Quantity must be number",
    })
    .min(1, { message: "Available Quantity can not be less than 1" }),
  rating: z
    .number({
      invalid_type_error: "Rating must be number",
    })
    .min(1, { message: "Rating can not be less than 1" })
    .max(5, { message: "Rating can not be more than 5" }),
  image: z.string({
    invalid_type_error: "Image must be string",
  }),
});

export const ProductValidation = {
  createProductValidationSchema,
};
