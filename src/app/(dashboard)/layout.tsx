import { redirect } from "next/navigation";

import { auth } from "@/auth/auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <main className="min-h-screen">{children}</main>;
}
