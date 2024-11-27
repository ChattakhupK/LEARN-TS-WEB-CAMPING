import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "firstName : String must at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "lastName : String must at least 2 characters" }),
  userName: z
    .string()
    .min(2, { message: "userName : String must at least 2 characters" }),
});

const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less than 1MB");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((err) => err.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
