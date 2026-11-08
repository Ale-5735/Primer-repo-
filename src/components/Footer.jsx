export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="brand-title">VIBE CODING CON REACT</span>
            </div>
            <p className="footer-desc">
              La plataforma de aprendizaje diseñada para convertirte en un desarrollador frontend ágil, 
              creativo y capacitado para orquestar inteligencia artificial en aplicaciones de producción.
            </p>
            <div className="footer-social-row">
              <span className="social-pill">🚀 React 19</span>
              <span className="social-pill">⚡ Vite 6+</span>
              <span className="social-pill">🤖 AI-Native</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#filosofia">Filosofía Vibe</a></li>
              <li><a href="#modulos">Temario del Curso</a></li>
              <li><a href="#simulador">Simulador en Vivo</a></li>
              <li><a href="#checklist">Checklist del Alumno</a></li>
              <li><a href="#vibrometro">Medidor de Vibra</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>Recursos Clave</h4>
            <ul>
              <li>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  Documentación React ↗
                </a>
              </li>
              <li>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                  Guía Oficial de Vite ↗
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  Repositorios de Práctica ↗
                </a>
              </li>
              <li>
                <a href="#checklist">
                  Guía de Onboarding ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Community Card */}
          <div className="footer-col footer-community">
            <h4>¿Dudas o Sugerencias?</h4>
            <p>Únete a nuestra sala de chat para compartir tus componentes creados con Vibe Coding.</p>
            <button
              onClick={() => alert('¡Bienvenido al canal comunitario! Te esperamos en las sesiones en vivo.')}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              💬 Unirme al Canal de Estudiantes
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Curso Vibe Coding con React. Desarrollado con pasión e inteligencia artificial.</p>
          <button onClick={scrollToTop} className="btn-back-top" title="Volver al inicio">
            Subir ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

