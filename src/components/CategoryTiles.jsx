import { categories } from "../data/products";

export default function CategoryTiles({ onPick }) {
  return (
    <div className="tiles" aria-label="Categorías">
      {categories.map((c) => (
        <button
          key={c.name}
          className="tile"
          style={{ "--c": c.color, "--on": c.on }}
          onClick={() => onPick(c.name)}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
