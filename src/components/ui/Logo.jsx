/**
 * Logo de marca de Banco Andino.
 * Isotipo: flor andina multicolor — pétalos con los colores del textil
 * (magenta, naranja, amarillo, verde, turquesa, morado) y centro cálido.
 *
 * @param {Object} props
 * @param {number} [props.size=44]      Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true] Mostrar el texto "Banco Andino".
 * @param {'dark'|'light'} [props.variant='dark'] Color del texto.
 */

// Logo de Banco Santander

export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#e2132b'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.8)' : '#6b6b7b'
  // El texto escala con el tamaño del isotipo.
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <img src="/logo.png" alt="Banco Santander" style={{ width: size, height: size, objectFit: 'contain' }} />

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            Banco Santander
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 700,
              color: subColor,
              letterSpacing: '1.2px',
            }}
          >
            CORE FINANCIERO
          </span>
        </span>
      )}
    </span>
  )
}
