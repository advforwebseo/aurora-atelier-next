import { NavLink } from "./NavLink";

export const Nav = () => {
  return (
    <nav className="flex items-center gap-6 lg:gap-15">
      <NavLink href="/#" text="Engagement" />
      <NavLink href="/#" text="Wedding" />
      <NavLink href="/#" text="Custom" />
      <NavLink href="/#" text="Fine Jewelry" />
      <NavLink href="/#" text="Ethics" />
      <NavLink href="/#" text="About" />
    </nav>
  );
};
