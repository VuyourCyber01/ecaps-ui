import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { LoginFormSchema } from "@/lib/form-types";
import { Link } from "react-router-dom";
import Loader from "@/components/globals/loader";
import { useState } from "react";

const Login = () => {
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof LoginFormSchema>) => {
    // const { error, errorMsg } = await actionSignUpUser({ email, password });
    // if (error) {
    //   toast.error(errorMsg);
    //   setSubmitError(errorMsg || "");
    // } else {
    //   toast.success("Check your email.", {
    //     description: "An email confirmation has been sent.",
    //   });
    //   setConfirmation(true);
    // }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="h-fit rounded-xl border p-10 shadow-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onChange={() => {
              if (submitError) setSubmitError("");
            }}
            className="flex w-full flex-col space-y-6 sm:w-[400px] sm:justify-center"
          >
            <p className="flex w-full items-center justify-start">
              <span className="text-4xl font-semibold first-letter:ml-2 dark:text-white">
                ecaps.
              </span>
            </p>
            <FormDescription
              className="
          text-foreground/60"
            >
              The Leading Banking Platform For the Emerging Middle Class.
            </FormDescription>
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {submitError && <FormMessage>{submitError}</FormMessage>}
            <Button
              type="submit"
              className="w-full p-6"
              size="lg"
              disabled={isLoading}
            >
              {!isLoading ? "Login" : <Loader />}
            </Button>
            <span className="self-center">
              Dont have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
            </span>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
