export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <a className="brand brand-footer" href="#" aria-label="Ratek home">
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
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="footer-email" href="mailto:hello@ratekdigital.com">
          hello@ratekdigital.com
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Ratek. All rights reserved.</span>
        <span>Technology that keeps your business moving.</span>
      </div>
    </footer>
  );
}
