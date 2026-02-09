"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { registerUser } from "@/auth/actions/register.action";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { registerSchema, RegisterSchemaType } from "../schema/register.schema";

export const RegisterForm = () => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      social_media: "",
    },
  });

  const { handleSubmit } = form;

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: RegisterSchemaType) => {
    const payload = {
      email: data.email,
      password: data.password,
      social_media: data.social_media,
    };

    startTransition(async () => {
      const result = await registerUser(payload);

      if (!result.success) {
        toast.error(result.error);
        return;
      }

      toast.success(result.message);

      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="social_media"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="social-media">Social Media</Label>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue className="placeholder:text-start!" placeholder="Social network" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-start">
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} className="cursor-pointer" type="submit">
          {isPending ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  );
};
