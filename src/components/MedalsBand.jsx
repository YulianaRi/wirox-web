import { img } from '../data/products'
import WaButton from './WaButton'

export default function MedalsBand() {
  return (
    <section id="medallas">
      <div className="wrap">
        <div className="band gold">
          <div>
            <h2>Medallas <span>plateadas y doradas</span> para colegios</h2>
            <p>Para olimpiadas, graduaciones y premiaciones. Con cinta y diseño personalizado con el nombre del colegio.</p>
            <WaButton msg="Hola Wirox, quiero cotizar medallas para un colegio.">Cotizar medallas</WaButton>
          </div>
          <img src={img('medallas.jpg')} alt="Medallas doradas con cinta roja para olimpiadas escolares" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
