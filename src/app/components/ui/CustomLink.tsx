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
        "flex h-fit items-center justify-center rounded-4xl bg-[#CFE1E7] px-12 py-2 text-center text-sm font-semibold transition-colors hover:bg-[#abceda]",
        className || ""
      )}
    >
      {text}
    </Link>
  );
};
