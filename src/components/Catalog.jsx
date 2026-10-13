import { categories, products } from '../data/products'
import ProductCard from './ProductCard'

export default function Catalog({ selected, onSelect }) {
  const list = products.filter((p) => selected === 'Todo' || p.category === selected)
  return (
    <section id="catalogo">
      <div className="wrap">
        <h2>Catálogo</h2>
        <p className="sub">Elige una categoría y cotiza el producto que necesitas.</p>
        <div className="chips" role="group" aria-label="Filtrar por categoría">
          {[{ name: 'Todo' }, ...categories].map((c) => (
            <button
              key={c.name}
              className="chip"
              aria-pressed={selected === c.name}
              onClick={() => onSelect(c.name)}
              style={c.color ? { '--c': c.color, '--on': c.on } : undefined}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="grid" aria-live="polite">
          {list.map((p) => <ProductCard key={p.name} product={p} />)}
        </div>
      </div>
    </section>
  )
}
