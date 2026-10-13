import { img } from '../data/products'
import WaButton from './WaButton'

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Wirox, inicio">
          <img src={img('logo.png')} alt="Wirox, láminas acrílicas y servicios" />
        </a>
        <nav aria-label="Principal">
          <a href="#catalogo">Catálogo</a>
          <a href="#medallas">Medallas</a>
          <a href="#medida">A medida</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <WaButton msg="Hola Wirox, quiero hacer una consulta.">Cotizar</WaButton>
      </div>
    </header>
  )
}
