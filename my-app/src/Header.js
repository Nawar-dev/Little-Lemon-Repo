import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header-container">
      <img src="Logo.svg" alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}
