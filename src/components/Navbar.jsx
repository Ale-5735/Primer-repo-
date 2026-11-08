import { useState } from 'react'

export default function Navbar({ currentTheme, onThemeChange, checklistCompleted, checklistTotal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const themes = [
    { id: 'neon', name: 'Cyber Neon', icon: '⚡' },
    { id: 'sunset', name: 'Sunset Glow', icon: '🌅' },
    { id: 'matrix', name: 'Matrix Emerald', icon: '🟢' },
    { id: 'minimal', name: 'Minimal Slate', icon: '✨' },
  ]

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="nav-logo">
          <span className="logo-icon">⚡</span>
          <div className="logo-text">
            <span className="brand-title">VIBE CODING</span>
            <span className="brand-subtitle">con React</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#filosofia">Filosofía</a>
          <a href="#modulos">Temario</a>
          <a href="#simulador">Simulador</a>
          <a href="#checklist">Tu Onboarding</a>
          <a href="#vibrometro">Vibrometro</a>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          {/* Progress Indicator */}
          <div className="nav-progress-pill" title="Progreso de tu onboarding">
            <span className="progress-dot"></span>
            <span>{checklistCompleted}/{checklistTotal} Listos</span>
          </div>

          {/* Theme Selector */}
          <div className="theme-selector-container">
            <select
              value={currentTheme}
              onChange={(e) => onThemeChange(e.target.value)}
              className="theme-select"
              aria-label="Selecciona un tema de estilo"
            >
              {themes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.icon} {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <a href="#filosofia" onClick={() => setMobileMenuOpen(false)}>Filosofía</a>
          <a href="#modulos" onClick={() => setMobileMenuOpen(false)}>Temario</a>
          <a href="#simulador" onClick={() => setMobileMenuOpen(false)}>Simulador de Vibes</a>
          <a href="#checklist" onClick={() => setMobileMenuOpen(false)}>Tu Onboarding</a>
          <a href="#vibrometro" onClick={() => setMobileMenuOpen(false)}>Vibrometro</a>
        </div>
      )}
    </nav>
  )
}

