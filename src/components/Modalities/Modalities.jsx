import { ChevronRight } from 'lucide-react'
import './Modalities.css'

export default function Modalities({ modalities }) {
  return (
    <section id="modalidades" className="modalities-section">
      <div className="modalities-section__inner">
        <div className="modalities-section__heading">
          <h2>Nossas Modalidades</h2>
          <p>
            Escolha seu esporte favorito e venha praticar com a gente em nossas
            quadras modernas.
          </p>
        </div>

        <div className="modalities-grid">
          {modalities.map(({ name, description, details, icon, color }) => (
            <article className={`modality-card modality-card--${color}`} key={name}>
              <div>
                <div className="modality-card__icon">
                  <img src={icon} alt="" aria-hidden="true" />
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>

              <div className="modality-card__details">
                <span>{details}</span>
                <ChevronRight aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
