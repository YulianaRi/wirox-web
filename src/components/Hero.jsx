import WaButton from './WaButton'
import CategoryTiles from './CategoryTiles'

export default function Hero({ onPick }) {
  return (
    <div className="wrap hero">
      <div>
        <h1>Acrílico e insumos para tu proyecto</h1>
        <p>Láminas por media plancha, medallas para colegios, llaveros, sellos y accesorios. Por mayor y menor, en Lima.</p>
        <div className="row">
          <WaButton msg="Hola Wirox, quiero cotizar.">Pedir cotización por WhatsApp</WaButton>
          <a className="btn alt" href="#catalogo">Ver catálogo</a>
        </div>
      </div>
      <CategoryTiles onPick={onPick} />
    </div>
  )
}
