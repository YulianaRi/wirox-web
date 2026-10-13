import WaButton from './WaButton'

const phrases = ['¿Tienes una idea en acrílico?', 'Lo hacemos realidad']

export default function IdeaMarquee() {
  // Se repite el contenido para que el movimiento sea continuo
  const items = Array.from({ length: 8 }, (_, i) => phrases[i % 2])
  return (
    <section id="medida">
      <div className="wrap">
        <div className="idea">
          <h2 className="sr">¿Tienes una idea en acrílico?</h2>
          <div className="marq" aria-hidden="true">
            <div className="track">
              {items.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </div>
          <p>Cuéntanos qué necesitas y lo hacemos realidad.</p>
          <WaButton msg="Hola Wirox, tengo una idea para hacer en acrílico.">Contar mi idea</WaButton>
        </div>
      </div>
    </section>
  )
}
