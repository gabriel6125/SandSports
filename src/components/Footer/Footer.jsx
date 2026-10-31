import { Camera, Play, Trophy, UsersRound } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div>
            <Trophy aria-hidden="true" />
            <span>SANDSPORTS</span>
          </div>
          <p>Projeto Disciplina WDE 2 • Arena de Esportes de Areia</p>
        </div>

        <div className="site-footer__social">
          <a href="#" aria-label="Instagram"><Camera aria-hidden="true" /></a>
          <a href="#" aria-label="Facebook"><UsersRound aria-hidden="true" /></a>
          <a href="#" aria-label="YouTube"><Play aria-hidden="true" /></a>
        </div>

        <p className="site-footer__copyright">
          &copy; 2026 Arena SandSports. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
