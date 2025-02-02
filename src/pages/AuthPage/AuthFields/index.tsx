import { PasswordInput } from "components";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "components-shadcn";
import { UseFormReturn } from "react-hook-form";

interface Props {
  isSignUp: boolean;
  form: UseFormReturn<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
}

export const AuthFields = ({ form, isSignUp }: Props) => (
  <>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</FormLabel>
          <FormControl>
            <Input placeholder="E-mail" {...field} className="mt-1" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Пароль</FormLabel>
          <FormControl>
            <PasswordInput placeholder="Пароль" type="password" {...field} className="mt-1" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {isSignUp && (
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Повторите пароль</FormLabel>
            <FormControl>
              <PasswordInput placeholder="Повторите пароль" type="password" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )}
  </>
);
