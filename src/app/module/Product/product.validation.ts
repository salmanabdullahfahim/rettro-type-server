import { z } from "zod";

const addProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Name must be string",
      })
      .max(30, { message: "Name can not be more than 30 characters" }),
    price: z
      .number({
        invalid_type_error: "Price must be number",
      })
      .min(1, { message: "Price can not be less than 1" }),
    description: z
      .string({
        invalid_type_error: "Description must be string",
      })
      .max(200, { message: "Description can not be more than 200 characters" }),
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
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Name must be string",
      })
      .max(30, { message: "Name can not be more than 30 characters" })
      .optional(),
    price: z
      .number({
        invalid_type_error: "Price must be number",
      })
      .min(1, { message: "Price can not be less than 1" })
      .optional(),
    description: z
      .string({
        invalid_type_error: "Description must be string",
      })
      .max(200, { message: "Description can not be more than 200 characters" })
      .optional(),
    availableQuantity: z
      .number({
        invalid_type_error: "Available Quantity must be number",
      })
      .min(1, { message: "Available Quantity can not be less than 1" })
      .optional(),
    rating: z
      .number({
        invalid_type_error: "Rating must be number",
      })
      .min(1, { message: "Rating can not be less than 1" })
      .max(5, { message: "Rating can not be more than 5" })
      .optional(),
    image: z
      .string({
        invalid_type_error: "Image must be string",
      })
      .optional(),
  }),
});

export const ProductValidation = {
  addProductValidationSchema,
  updateProductValidationSchema,
};
