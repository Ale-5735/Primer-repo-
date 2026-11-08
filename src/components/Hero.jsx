export default function Hero() {
  return (
    <header className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="badge">
              <span className="badge-pulse"></span>
              ✨ BIENVENIDO AL CURSO OFICIAL • REACT 19 & IA
            </span>
          </div>

          <h1 className="hero-title">
            Programa a la velocidad del pensamiento con{' '}
            <span className="gradient-text">Vibe Coding</span>
          </h1>

          <p className="hero-description">
            Bienvenido a una nueva era del desarrollo web. Deja atrás la frustración de la sintaxis repetitiva: 
            aprende a expresar tu visión en lenguaje natural, orquestar modelos de inteligencia artificial y construir 
            aplicaciones interactivas de alto nivel con <strong>React 19</strong> y <strong>Vite</strong>.
          </p>

          <div className="hero-cta-group">
            <a href="#modulos" className="btn btn-primary">
              <span>Explorar Temario</span>
              <span className="arrow-icon">→</span>
            </a>
            <a href="#simulador" className="btn btn-secondary">
              <span>⚡ Probar Simulador Interactivo</span>
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">⚛️</span>
              <div className="highlight-text">
                <strong>React 19</strong>
                <small>Hooks & Arquitectura</small>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⚡</span>
              <div className="highlight-text">
                <strong>Vite HMR</strong>
                <small>Recarga instantánea</small>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🧠</span>
              <div className="highlight-text">
                <strong>IA Asistida</strong>
                <small>Prompt-to-Component</small>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <div className="highlight-text">
                <strong>100% Práctico</strong>
                <small>Proyectos reales</small>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Card Preview */}
        <div className="hero-visual">
          <div className="hero-card-glow"></div>
          <div className="glass-card hero-code-card animate-float">
            <div className="code-card-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="card-tab-title">VibePrompt.jsx</div>
              <span className="status-live">● VIBE ACTIVO</span>
            </div>

            <div className="card-prompt-bubble">
              <span className="prompt-label">Prompt del Vibe Coder:</span>
              <p className="prompt-text">
                &ldquo;Crea un componente de bienvenida con micro-interacción de bienvenida y métricas del estudiante.&rdquo;
              </p>
            </div>

            <div className="card-preview-area">
              <div className="preview-mini-banner">
                <span className="preview-tag">React 19 Ready</span>
                <div className="preview-avatar-row">
                  <span className="avatar">👨‍💻</span>
                  <span className="avatar">👩‍💻</span>
                  <span className="avatar">🤖</span>
                  <span className="avatar-count">+2,400 alumnos con buena vibra</span>
                </div>
              </div>
              <div className="preview-stat-grid">
                <div className="stat-box">
                  <div className="stat-num">5x</div>
                  <div className="stat-desc">Velocidad de prototipado</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">0%</div>
                  <div className="stat-desc">Boilerplate aburrido</div>
                </div>
              </div>
            </div>

            <div className="card-footer-tip">
              <span>💡 Regla #1: Tú eres el arquitecto, la IA es tu copiloto ultrarrápido.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
