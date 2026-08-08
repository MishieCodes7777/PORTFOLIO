import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">
        {profile.firstName} {profile.lastName}
      </p>
      <a className="footer__top" href="#top">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
