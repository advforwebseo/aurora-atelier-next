/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export const Logo = () => {
  const pathname = usePathname();
  const isActive = pathname === "/";

  const handleHomeClick = () => {
    if (isActive) {
      toast.info("You're already on the home page!");
    }
  };

  return (
    <Link onClick={handleHomeClick} href="/">
      <img src="/logo.svg" width={64} height={64} alt="Aurora Atelier Logo" />
    </Link>
  );
};
