import { categories } from '../data/products'
import WaButton from './WaButton'

export default function ProductCard({ product: p }) {
  const cat = categories.find((c) => c.name === p.category)
  return (
    <article className="card" style={{ '--c': cat.color }}>
      <div className="img">
        {p.image ? (
          <img src={p.image} alt={p.name} loading="lazy" />
        ) : (
          <div className="ph">Foto del producto<br />(reemplazar)</div>
        )}
      </div>
      <div className="body">
        <span className="tag"><i />{p.category}</span>
        <h3>{p.name}</h3>
        <p>{p.text}</p>
        <WaButton msg={`Hola Wirox, quiero cotizar: ${p.name}.`}>Cotizar</WaButton>
      </div>
    </article>
  )
}
