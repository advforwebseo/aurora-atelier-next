import { LoginLink } from "./LoginLink";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="container flex items-center justify-between p-6">
      <Logo />
      <Nav />
      <LoginLink />
    </header>
  );
};
