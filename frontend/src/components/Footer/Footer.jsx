import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>AgriSmart AI</h2>

      <p>
        Empowering farmers with Artificial Intelligence for a smarter future.
      </p>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      <p className="copyright">
        © 2026 AgriSmart AI. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;