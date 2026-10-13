import WaButton from './WaButton'

export default function WhatsAppFab() {
  return (
    <WaButton className="fab" msg="Hola Wirox, quiero hacer una consulta." aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" /></svg>
    </WaButton>
  )
}
