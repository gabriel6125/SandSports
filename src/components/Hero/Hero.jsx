import './Hero.css'

export default function Hero() {
  return (
    <section id="sobre" className="hero-section">
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <div className="hero-section__eyebrow">
            <span />
            Arena de Esportes de Areia
          </div>

          <h1>
            Viva a energia do <span>esporte na areia!</span>
          </h1>

          <p>
            Sua melhor estrutura para a prática de esportes praianos na cidade.
            Quadras de alta qualidade, ambiente familiar, vestiários completos e
            espaço de convivência.
          </p>

          <div className="hero-section__links">
            <a className="hero-section__primary-link" href="#cadastro">
              Cadastre-se para jogar
            </a>
            <a className="hero-section__secondary-link" href="#modalidades">
              Conheça os esportes
            </a>
          </div>
        </div>

        <div className="hero-section__visual">
          <div className="hero-section__glow" />
          <div className="hero-section__image-card">
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80"
              alt="Quadra de Vôlei de Praia"
            />
            <div className="hero-section__caption">
              <span>Qualidade Premium</span>
              <h2>A melhor areia fina e tratada</h2>
              <p>Estrutura completa com iluminação LED para jogos noturnos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
