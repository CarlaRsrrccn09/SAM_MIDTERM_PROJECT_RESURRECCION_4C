import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Career pathway", href: "#career-pathway" },
  { label: "Skills", href: "#skills" },
  { label: "Job roles", href: "#job-roles" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function returnToTop(event) {
    event.preventDefault();
    closeMenu();
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={returnToTop} aria-label="SysPath home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>SYSPATH<span className="brand-period">.</span></span>
      </a>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`site-navigation${menuOpen ? " is-open" : ""}`}
        id="site-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            className={item.href === "#about" ? "nav-link nav-cta" : "nav-link"}
            href={item.href}
            onClick={item.href === "/" ? returnToTop : closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
