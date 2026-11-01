import logo from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#sobre" aria-label="SandSports - início">
          <img className="site-header__brand-icon" src={logo} alt="" aria-hidden="true" />
          <span className="site-header__brand-name">
            SAND<span>SPORTS</span>
          </span>
        </a>

        <div className="site-header__actions">
          <nav className="site-header__nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#modalidades">Modalidades</a>
          </nav>
          <a className="site-header__cta" href="#cadastro">Cadastre-se</a>
        </div>
      </div>
    </header>
  )
}
