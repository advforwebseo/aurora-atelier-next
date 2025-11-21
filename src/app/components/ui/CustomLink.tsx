import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  text: string;
  className?: string;
};

export const CustomLink = ({ href, className, text }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-2xl bg-[#CFE1E7] px-6 py-1 font-semibold transition-colors hover:bg-[#abceda]",
        className || ""
      )}
    >
      {text}
    </Link>
  );
};
