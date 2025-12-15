"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  text: string;
};

export const NavLink = ({ href, text }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? "text-[#FFB800] underline" : "hover:underline"}>
      {text}
    </Link>
  );
};
