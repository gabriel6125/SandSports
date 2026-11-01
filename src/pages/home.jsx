import beachTennisIcon from '../assets/beach_tenis.png'
import futevoleiIcon from '../assets/futevõlei.png'
import voleiIcon from '../assets/volei_de_praia.png'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Modalities from '../components/Modalities/Modalities'
import Registration from '../components/Registration/Registration'
import Footer from '../components/Footer/Footer'

const modalities = [
  {
    value: 'beach-tennis',
    name: 'Beach Tennis',
    description:
      'O esporte que mais cresce no Brasil. Dinâmico, fácil de aprender e divertido para jogar com amigos e família.',
    details: 'AULAS & LOCAÇÃO',
    icon: beachTennisIcon,
    color: 'orange',
  },
  {
    value: 'volei-praia',
    name: 'Vôlei de Praia',
    description:
      'Clássico das areias! Melhore seu condicionamento físico, impulsão e trabalho em equipe em jogos de dupla ou quarteto.',
    details: 'TREINO FUNCIONAL & JOGOS',
    icon: voleiIcon,
    color: 'amber',
  },
  {
    value: 'futevolei',
    name: 'Futevôlei',
    description:
      'Combinação perfeita de habilidade, controle e agilidade. Excelente para ganho de resistência física e precisão.',
    details: 'ESCOLINHA & TORNEIOS',
    icon: futevoleiIcon,
    color: 'emerald',
  },
]

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Modalities modalities={modalities} />
        <Registration modalities={modalities} />
      </main>
      <Footer />
    </div>
  )
}
