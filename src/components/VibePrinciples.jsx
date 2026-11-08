export default function VibePrinciples() {
  const principles = [
    {
      icon: '🧠',
      tag: 'Mindset',
      title: 'De la Idea al Código en Lenguaje Natural',
      description:
        'Aprende a formular prompts precisos con especificaciones técnicas, props esperadas y estados para que la IA genere código React limpio desde el primer intento.',
      highlight: 'Prompt Engineering para Frontend',
    },
    {
      icon: '⚡',
      tag: 'Velocidad',
      title: 'Ciclo de Iteración Ultrarrápido',
      description:
        'Combina la potencia de Vite Hot Module Replacement con agentes de IA: visualiza los cambios al instante, experimenta con estilos y haz micro-ajustes en segundos.',
      highlight: 'Feedback Loop en Tiempo Real',
    },
    {
      icon: '🛡️',
      tag: 'Criterio',
      title: 'Tú eres el Arquitecto del Sistema',
      description:
        'Vibe Coding no es aceptar código a ciegas. Desarrollarás el ojo crítico para evaluar accesibilidad, performance, re-renderizados y modularidad en React 19.',
      highlight: 'Control de Calidad & Arquitectura',
    },
    {
      icon: '🚀',
      tag: 'Producción',
      title: 'De Prototipos a Aplicaciones Reales',
      description:
        'No te quedes en demos aisladas. En el curso aprenderás a estructurar proyectos completos, gestionar estado global, conectar APIs y desplegar a producción.',
      highlight: 'Enfoque Full-Stack Ready',
    },
  ]

  return (
    <section id="filosofia" className="section principles-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">FILOSOFÍA DEL CURSO</span>
          <h2 className="section-title">
            ¿Por qué aprender <span className="gradient-text">Vibe Coding</span>?
          </h2>
          <p className="section-subtitle">
            El desarrollo frontend ha evolucionado. La verdadera habilidad del desarrollador moderno
            no es memorizar sintaxis, sino orquestar herramientas inteligentes para resolver problemas reales con elegancia.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div key={index} className="glass-card principle-card">
              <div className="principle-card-top">
                <span className="principle-icon">{item.icon}</span>
                <span className="principle-tag">{item.tag}</span>
              </div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-desc">{item.description}</p>
              <div className="principle-footer">
                <span className="principle-pill">✨ {item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy quote banner */}
        <div className="philosophy-banner glass-card">
          <div className="banner-quote-icon">“</div>
          <p className="banner-quote-text">
            En el Vibe Coding, tu principal lenguaje de programación es tu capacidad de conceptualizar, 
            diseñar la experiencia del usuario y guiar a la inteligencia artificial con claridad y criterio técnico.
          </p>
          <span className="banner-quote-author">— Manifiesto del Desarrollador Vibe</span>
        </div>
      </div>
    </section>
  )
}

