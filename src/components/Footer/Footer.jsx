import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div>
            <img src={logo} alt="" aria-hidden="true" />
            <span>SANDSPORTS</span>
          </div>
          <p>Projeto Disciplina WEB 2 • Arena de Esportes de Areia</p>
        </div>

        <div className="site-footer__social">
          <span aria-hidden="true">
            <FaInstagram aria-hidden="true" />
          </span>
          <span aria-hidden="true">
            <FaWhatsapp aria-hidden="true" />
          </span>
          <span aria-hidden="true">
            <FaLocationDot aria-hidden="true" />
          </span>
        </div>

        <p className="site-footer__copyright">
          &copy; 2026 Arena SandSports. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
