"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import { fetcher } from "@helpers/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().min(6, {
    message: "email must be at least 6 characters.",
  }),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function AuthForm() {
  const { mutate } = useSWRConfig();
  const { push } = useRouter();
  const { toast } = useToast();

  // 1. Defining our form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Defining a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // 3. Sending post req to sign in
    mutate(
      "https://reqres.in/api/login",
      fetcher("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values),
      })
    ).then((res) => {
      if (res.token) {
        document.cookie = `token=${res.token}`;
        toast({
          title: values.email,
          description: "Вы успешно вошли в аккаунт",
        });

        // 4. after checking token we can redirect user to the home page
        push("/");
      } else {
      }
    });
  }

  useEffect(() => {
    toast({
      title: "Вы не авторизованы",
      description: "Пожалуйста, авторизуйтесь",
    });
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[80%] space-y-8 md:w-1/2"
      >
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input
                  placeholder="Введите email"
                  {...form.register("email")}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={() => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите пароль"
                  {...form.register("password")}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full " type="submit">
          Войти
        </Button>
      </form>
    </Form>
  );
}
