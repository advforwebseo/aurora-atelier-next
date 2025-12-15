import { NavLink } from "../../shared/NavLink";

export const Nav = () => {
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-15">
      <NavLink href="/#" text="Engagement" />
      <NavLink href="/#" text="Wedding" />
      <NavLink href="/#" text="Custom" />
      <NavLink href="/#" text="Fine Jewelry" />
      <NavLink href="/#" text="Ethics" />
      <NavLink href="/#" text="About" />
    </nav>
  );
};
