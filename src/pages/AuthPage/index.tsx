import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form, useToast, Card, CardHeader, CardTitle, CardContent } from "components-shadcn";
import { signin, signup } from "api";
import { ErrorResponse } from "types";

import { SigninSchema, SignupSchema } from "./constants";
import { AuthFields } from "./AuthFields";
import { animateAuthForm } from "./helpers";

export const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const animateRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(isRegister ? SignupSchema : SigninSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { handleSubmit, reset } = form;

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/profile");
  }, [navigate]);

  const toggleAuth = () => {
    setIsRegister(!isRegister);
    reset();
    animate();
  };

  const onSubmit = async (data: { email: string; password: string; confirmPassword?: string }) => {
    try {
      setIsLoading(true);
      await (isRegister ? signup(data) : signin(data));

      navigate("/profile");
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse>(error) && error.response) {
        toast({
          title: "Ошибка",
          description: error.response.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Ошибка",
          description: "Неизвестная ошибка",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const animate = () => {
    if (animateRef.current) animateAuthForm(animateRef.current);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Form {...form}>
        <Card className="w-sm mx-auto shadow-lg flex flex-col gap-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-center">{isRegister ? "Регистрация" : "Вход"}</CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden">
              <div className="space-y-4 transition-all ease-linear transform" ref={animateRef}>
                <AuthFields form={form} isRegister={isRegister} />

                <Button variant="outline" type="submit" className="w-full mb-0">
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : isRegister ? "Создать аккаунт" : "Войти"}
                </Button>

                <div className="mt-4 text-center">
                  <span className="dark:text-white">{isRegister ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}</span>
                  <button type="button" onClick={toggleAuth} className="text-blue-500 ml-1">
                    {isRegister ? "Войти" : "Создать аккаунт"}
                  </button>
                </div>
              </div>
            </CardContent>
          </form>
        </Card>
      </Form>
    </div>
  );
};
