import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NavLink } from "../../shared/NavLink";

export function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex cursor-pointer md:hidden">
        <Menu className="size-5 shrink-0" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Aurora Atelier</SheetTitle>
          <SheetDescription className="sr-only"></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-6 px-4">
          <NavLink href="/#" text="Engagement" />
          <NavLink href="/#" text="Wedding" />
          <NavLink href="/#" text="Custom" />
          <NavLink href="/#" text="Fine Jewelry" />
          <NavLink href="/#" text="Ethics" />
          <NavLink href="/#" text="About" />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
