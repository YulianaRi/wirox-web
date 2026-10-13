import WaButton from './WaButton'

export default function Contact() {
  return (
    <section id="contacto">
      <div className="wrap">
        <h2>Visítanos o escríbenos</h2>
        <p className="sub">
          Av. Abancay 817, tienda 108, Lima<br />
          WhatsApp +51 931 097 656
        </p>
        <div className="social">
          <WaButton msg="Hola Wirox, quiero hacer una consulta.">WhatsApp</WaButton>
          <a className="btn alt" href="https://www.instagram.com/wiroxacrilicos/" target="_blank" rel="noopener">Instagram</a>
          <a className="btn alt" href="https://www.facebook.com/acrilicos.wirox.2025" target="_blank" rel="noopener">Facebook</a>
          <a className="btn alt" href="https://www.google.com/maps/search/?api=1&query=Av.+Abancay+817+Lima" target="_blank" rel="noopener">Ver en el mapa</a>
        </div>
      </div>
    </section>
  )
}
