import { z } from "zod";

export const SignupSchema = z
  .object({
    email: z.string().min(1, "Email обязателен").email("Неверный формат email"),

    password: z
      .string()
      .min(6, "Пароль должен содержать минимум 6 символов")
      .max(50, "Пароль слишком длинный")
      .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
      .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают",
  });

export const SigninSchema = z.object({
  email: z.string().min(1, "Email обязателен").email("Неверный формат email"),

  password: z
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .max(50, "Пароль слишком длинный")
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру"),

  confirmPassword: z.string(),
});
