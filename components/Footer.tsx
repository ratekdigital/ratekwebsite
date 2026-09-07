import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./footer.css";

import { RatekLogo } from "./RatekLogo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <RatekLogo variant="footer" />

        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials" aria-label="Social media">
          <a
            href="https://www.linkedin.com/company/ratek-digital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ratek on LinkedIn"
          >
            <FaLinkedin size={18} strokeWidth={1.8} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61592776841783&sk=directory_links"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ratek on GitHub"
          >
            <FaFacebook size={18} strokeWidth={1.8} />
          </a>
        </div>

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

// import { RatekLogo } from "./RatekLogo";

// export function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container footer-top">
//         {/* <a className="brand brand-footer" href="#" aria-label="Ratek home">
//           <span className="logo-mark" aria-hidden="true">
//             <i />
//             <i />
//             <i />
//           </span>
//           <span>
//             <strong>RATEK</strong>
//             <small>RAPID ACCESS TECHNOLOGY</small>
//           </span>
//         </a> */}
//         <RatekLogo variant="footer" />

//         <nav aria-label="Footer navigation">
//           <a href="#services">Services</a>
//           <a href="#solutions">Solutions</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </nav>
//         <a className="footer-email" href="mailto:hello@ratekdigital.com">
//           hello@ratekdigital.com
//         </a>
//       </div>
//       <div className="container footer-bottom">
//         <span>© 2026 Ratek. All rights reserved.</span>
//         <span>Technology that keeps your business moving.</span>
//       </div>
//     </footer>
//   );
// }
