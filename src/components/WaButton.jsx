import { waLink } from '../lib/whatsapp'

export default function WaButton({ msg, className = 'btn', children, ...rest }) {
  return (
    <a className={className} href={waLink(msg)} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  )
}
