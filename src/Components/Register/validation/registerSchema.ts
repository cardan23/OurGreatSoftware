import { z } from "zod";

export const registerSchema = z.object({
  Name: z.string().min(2).max(30),
  LastName: z.string().min(2).max(30),
  Email: z.string().email(),
  Password: z.string().min(8).max(50),
  PasswordConfirmation: z.string().min(8).max(50),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
