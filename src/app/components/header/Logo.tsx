"use client";

import Image from "next/image";
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
      <Image src="/logo.svg" width={64} height={64} priority alt="Aurora Atelier Logo" />
    </Link>
  );
};
