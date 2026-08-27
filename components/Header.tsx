import { RatekLogo } from "./RatekLogo";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#" aria-label="Ratek home">
          <span className="logo-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>RATEK</strong>
            <small>RAPID ACCESS TECHNOLOGY</small>
          </span>
        </a>
        {/* <RatekLogo variant="header" /> */}

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Talk to Ratek <span>↗</span>
        </a>
      </div>
    </header>
  );
}
