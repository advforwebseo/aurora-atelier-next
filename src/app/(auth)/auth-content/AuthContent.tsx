"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LoginForm } from "./ui/LoginForm";
import { RegisterForm } from "./ui/RegisterForm";

export const AuthContent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          Log in / Register
        </Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden p-0 sm:max-w-105">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="mx-6 grid grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="px-6 py-4">
            <LoginForm />
          </TabsContent>

          <TabsContent value="register" className="px-6 py-4">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
