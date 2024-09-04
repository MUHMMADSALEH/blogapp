import z from "zod";
export const signupInput = z.object({
    username: z.string(),
    password: z.string().min(6),
    name: z.string().optional(),
  });