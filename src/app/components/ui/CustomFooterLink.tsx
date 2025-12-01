import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className?: string;
  text: string;
};

export const CustomFooterLink = ({ href, className, text }: Props) => {
  return (
    <Link
      className={cn("w-fit transition-colors hover:text-[#FFB800]", className || "")}
      href={href}
    >
      {text}
    </Link>
  );
};
