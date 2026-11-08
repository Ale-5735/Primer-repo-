import { useState } from 'react'

export default function CourseSyllabus() {
  const [expandedModule, setExpandedModule] = useState(0)

  const modules = [
    {
      id: 1,
      number: '01',
      title: 'El Mindset del Vibe Coder & Setup Inicial',
      duration: 'Semana 1 • 4 Lecciones',
      badge: 'Fundamentos',
      summary:
        'Aprende a pensar como un desarrollador aumentado. Comprende el equilibrio entre intención humana y generación de código por IA.',
      topics: [
        '¿Qué es el Vibe Coding y cómo transforma el desarrollo de software?',
        'Configuración del entorno: Vite, Node.js y React 19 sin fricciones.',
        'Herramientas de IA de última generación: Antigravity, Cursor, Copilot y LLMs.',
        'Tu primer componente generado por prompt: Del concepto a la pantalla en 3 minutos.',
      ],
      project: 'Mini-reto: Construir una tarjeta de presentación interactiva usando solo 3 prompts.',
    },
    {
      id: 2,
      number: '02',
      title: 'Arquitectura Limpia & React 19 Moderno',
      duration: 'Semana 2 • 5 Lecciones',
      badge: 'Core React',
      summary:
        'Domina los fundamentos de React 19 para poder evaluar, entender y refinar todo el código generado por IA con total confianza.',
      topics: [
        'Descomposición de interfaces complejas en componentes atómicos y reutilizables.',
        'Estado reactivo con useState, useReducer y novedades de React 19.',
        'Flujo de datos unidireccional y comunicación efectiva entre componentes.',
        'Prevención de re-renders innecesarios y estructuración limpia de carpetas.',
      ],
      project: 'Mini-reto: Crear un dashboard interactivo de hábitos con persistencia en LocalStorage.',
    },
    {
      id: 3,
      number: '03',
      title: 'UIs Asombrosas & Micro-interacciones',
      duration: 'Semana 3 • 4 Lecciones',
      badge: 'Diseño & CSS',
      summary:
        'Lleva el aspecto visual de tus aplicaciones a nivel profesional mediante estilos modernos, animaciones suaves y sistemas de diseño.',
      topics: [
        'Estilizado ágil con CSS Variables, Glassmorphism y temas intercambiables.',
        'Diseño responsive infalible: Mobile-first con Flexbox y CSS Grid.',
        'Micro-interacciones y animaciones que enamoran al usuario.',
        'Accesibilidad web (a11y) y contrastes de color asistidos por IA.',
      ],
      project: 'Mini-reto: Rediseñar una aplicación aburrida en una experiencia visual impactante.',
    },
    {
      id: 4,
      number: '04',
      title: 'Prompt Engineering Avanzado & Debugging',
      duration: 'Semana 4 • 5 Lecciones',
      badge: 'Estrategia IA',
      summary:
        'Aprende a hablar el idioma de los modelos de IA con precisión quirúrgica para depurar errores y refactorizar código sin esfuerzo.',
      topics: [
        'La fórmula RTC (Role, Task, Context, Constraints) aplicada a React.',
        'Técnicas de debugging asistido: Cómo interpretar errores de consola junto a la IA.',
        'Refactorización guiada: De código espagueti a componentes de nivel senior.',
        'Manejo de estados de carga, errores y consumo de APIs asíncronas.',
      ],
      project: 'Mini-reto: Encontrar y solucionar 5 bugs sutiles en una app de comercio electrónico.',
    },
    {
      id: 5,
      number: '05',
      title: 'Proyecto Final: De Cero a Producción',
      duration: 'Semana 5-6 • 6 Lecciones',
      badge: 'Cierre & Portfolio',
      summary:
        'Construye una aplicación web completa, pule cada detalle de la experiencia de usuario y despliégala públicamente para tu portafolio.',
      topics: [
        'Brainstorming y especificación del proyecto final con asistencia de IA.',
        'Construcción modular paso a paso integrando todo lo aprendido.',
        'Optimización para producción con vite build y auditoría de rendimiento.',
        'Despliegue continuo gratuito (Vercel / Netlify / GitHub Pages).',
        'Presentación del proyecto ante la comunidad y retroalimentación personalizada.',
      ],
      project: 'Proyecto Final: Una aplicación web lista para producción que podrás presumir en tu CV.',
    },
  ]

  return (
    <section id="modulos" className="section syllabus-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">PROGRAMA DE ESTUDIOS</span>
          <h2 className="section-title">
            ¿Qué vas a aprender en el <span className="gradient-text">Curso</span>?
          </h2>
          <p className="section-subtitle">
            Un recorrido progresivo, práctico e intensivo diseñado para llevarte desde la primera línea de código
            hasta la creación de productos web de alta calidad listos para el mundo real.
          </p>
        </div>

        <div className="syllabus-container">
          {modules.map((m, index) => {
            const isExpanded = expandedModule === index

            return (
              <div
                key={m.id}
                className={`syllabus-module-card glass-card ${isExpanded ? 'is-active' : ''}`}
              >
                <div
                  className="module-card-header"
                  onClick={() => setExpandedModule(isExpanded ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setExpandedModule(isExpanded ? null : index)
                    }
                  }}
                >
                  <div className="module-title-group">
                    <span className="module-number">{m.number}</span>
                    <div>
                      <div className="module-meta">
                        <span className="module-badge">{m.badge}</span>
                        <span className="module-duration">⏱️ {m.duration}</span>
                      </div>
                      <h3 className="module-heading">{m.title}</h3>
                    </div>
                  </div>
                  <div className="module-toggle-icon">
                    {isExpanded ? '▲' : '▼'}
                  </div>
                </div>

                {isExpanded && (
                  <div className="module-card-body">
                    <p className="module-summary">{m.summary}</p>

                    <div className="module-topics-list">
                      <h4>Temas clave incluidos:</h4>
                      <ul>
                        {m.topics.map((topic, i) => (
                          <li key={i}>
                            <span className="check-bullet">✔</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="module-project-box">
                      <span className="project-icon">🏆</span>
                      <div>
                        <strong>{m.project.split(':')[0]}:</strong>
                        <span>{m.project.split(':')[1]}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Course stats banner */}
        <div className="syllabus-stats-row">
          <div className="stat-pill">
            <span className="stat-pill-icon">📚</span>
            <div>
              <strong>24 Lecciones</strong>
              <small>Contenido paso a paso</small>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-icon">💻</span>
            <div>
              <strong>5 Retos de Código</strong>
              <small>Práctica garantizada</small>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-icon">🎓</span>
            <div>
              <strong>Certificado Oficial</strong>
              <small>Al finalizar tu proyecto</small>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-icon">🤝</span>
            <div>
              <strong>Comunidad Privada</strong>
              <small>Soporte continuo</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

