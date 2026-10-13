import WaButton from './WaButton'

export default function QuoteBoxes() {
  return (
    <section>
      <div className="wrap two">
        <div className="box">
          <h3>Acrílico por media plancha</h3>
          <p>Cortes de media plancha para talleres, empresas y emprendedores. Dinos la medida y el color que buscas.</p>
          <WaButton msg="Hola Wirox, quiero cotizar acrílico por media plancha.">Cotizar acrílico</WaButton>
        </div>
        <div className="box">
          <h3>Por mayor y por menor</h3>
          <p>Atendemos pedidos pequeños y de volumen. Escríbenos la cantidad y te respondemos con precios.</p>
          <WaButton className="btn alt" msg="Hola Wirox, quiero precios por mayor.">Consultar precios</WaButton>
        </div>
      </div>
    </section>
  )
}
