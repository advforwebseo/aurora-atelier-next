import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <nav className="flex flex-col gap-6 px-4"></nav>
      </SheetContent>
    </Sheet>
  );
}
