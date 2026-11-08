import { useState } from 'react'

export default function VibeMeter() {
  const [energy, setEnergy] = useState(65)
  const [clickCount, setClickCount] = useState(0)
  const [quoteIndex, setQuoteIndex] = useState(0)

  const tips = [
    '💡 "Un buen prompt no pide código perfecto: pide una arquitectura clara y luego refina con iteraciones."',
    '⚡ "No luches contra la sintaxis; enfócate en la experiencia de usuario y en la estructura lógica."',
    '🚀 "El secreto del Vibe Coding es el ciclo corto: prompt -> visualización en Vite -> ajuste inmediato."',
    '🧠 "La IA es tu copiloto de alto rendimiento. Tú siempre mantienes las manos en el volante arquitectónico."',
    '🎨 "Menos tiempo peleando con CSS roto, más tiempo creando interacciones mágicas para los usuarios."',
    '🔥 "Un desarrollador con IA no reemplaza al programador; el programador que domina la IA reemplaza al que se resiste."',
  ]

  const getRank = (lvl) => {
    if (lvl < 40) return { title: 'Iniciando la Vibra 🌱', color: '#9ca3af' }
    if (lvl < 75) return { title: 'Vibe Coder Entusiasta ⚡', color: '#06b6d4' }
    if (lvl < 100) return { title: 'Master en React & Prompts 🚀', color: '#8b5cf6' }
    return { title: 'Arquitecto Vibe Legendario 👑', color: '#ec4899' }
  }

  const handleBoost = () => {
    setEnergy((prev) => Math.min(120, prev + 10))
    setClickCount((prev) => prev + 1)
    setQuoteIndex((prev) => (prev + 1) % tips.length)
  }

  const handleChill = () => {
    setEnergy(50)
  }

  const rank = getRank(energy)

  return (
    <section id="vibrometro" className="section vibrometro-section">
      <div className="container">
        <div className="vibrometro-card glass-card">
          <div className="vibrometro-layout">
            {/* Left meter visual */}
            <div className="meter-left">
              <span className="badge">GAMIFICACIÓN DEL CURSO</span>
              <h2 className="meter-title">
                Medidor de <span className="gradient-text">Vibe Coding</span>
              </h2>
              <p className="meter-desc">
                ¿Sientes la energía para programar hoy? Aumenta tu medidor de vibra, descubre consejos de expertos
                y prepárate mentalmente para crear código sin fricciones.
              </p>

              <div className="meter-rank-box" style={{ borderColor: rank.color }}>
                <span className="rank-label">Tu Rango Actual:</span>
                <span className="rank-name" style={{ color: rank.color }}>
                  {rank.title}
                </span>
              </div>

              <div className="meter-actions-row">
                <button onClick={handleBoost} className="btn btn-primary btn-boost">
                  <span>⚡ ¡Subir Vibra (+10%)!</span>
                </button>
                <button onClick={handleChill} className="btn btn-secondary btn-sm">
                  Reiniciar Nivel
                </button>
              </div>

              <small className="boost-counter">
                Has potenciado tu energía <strong>{clickCount}</strong> veces en esta sesión.
              </small>
            </div>

            {/* Right energy gauge & advice */}
            <div className="meter-right">
              <div className="gauge-container">
                <div className="gauge-circle-outer">
                  <div
                    className="gauge-circle-inner"
                    style={{
                      background: `conic-gradient(var(--accent-1) 0% ${Math.min(
                        100,
                        energy
                      )}%, rgba(255, 255, 255, 0.08) ${Math.min(100, energy)}% 100%)`,
                    }}
                  >
                    <div className="gauge-center-badge">
                      <span className="gauge-percent">{energy}%</span>
                      <span className="gauge-label">ENERGÍA VIBE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quote-box">
                <span className="quote-badge">CONSEJO DEL DÍA</span>
                <p className="quote-text">{tips[quoteIndex]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

