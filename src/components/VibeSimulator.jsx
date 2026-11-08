import { useState } from 'react'

export default function VibeSimulator() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [customPrompt, setCustomPrompt] = useState('')
  const [customResponse, setCustomResponse] = useState(null)

  // Demo 1 State (Neon Card)
  const [neonActive, setNeonActive] = useState(true)
  const [neonStatus, setNeonStatus] = useState('Online')

  // Demo 2 State (Reaction Booster)
  const [reactions, setReactions] = useState({ fire: 14, heart: 28, rocket: 42 })
  const [lastReacted, setLastReacted] = useState(null)

  // Demo 3 State (Palette Swatcher)
  const [selectedColor, setSelectedColor] = useState('#8b5cf6')

  // Demo 4 State (Project Idea Generator)
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0)
  const projectIdeas = [
    {
      title: 'VibeFlow: Tablero Kanban Asistido por IA',
      stack: 'React 19 + LocalStorage + Drag and Drop',
      desc: 'Un tablero donde describes una tarea y la IA genera subtareas y estimación de tiempo.',
    },
    {
      title: 'SoundVibe: Sintetizador de Audio en el Navegador',
      stack: 'React 19 + Web Audio API + Canvas',
      desc: 'Genera paisajes sonoros lo-fi relajantes mientras programas con controles reactivos.',
    },
    {
      title: 'PromptCraft: Gestor y Optimizador de Prompts Frontend',
      stack: 'React 19 + Tailwind CSS + Exportación JSON',
      desc: 'Biblioteca personal de componentes y prompts para reutilizar en cualquier proyecto.',
    },
    {
      title: 'MicroSaaS Dashboard: Analíticas en Tiempo Real',
      stack: 'React 19 + SVG Charts + Responsive Grid',
      desc: 'Panel de métricas con filtros interactivos, animaciones suaves y exportación a PDF.',
    },
  ]

  const presets = [
    {
      id: 'neon-card',
      title: 'Tarjeta de Estado Neón',
      icon: '💡',
      prompt: 'Crea una tarjeta de perfil con efecto glow activable, estado en tiempo real y micro-interacciones suaves.',
      code: `// Componente generado con Vibe Coding
export function VibeUserCard({ isGlowing, status }) {
  return (
    <div className={\`vibe-neon-box \${isGlowing ? 'glow-on' : ''}\`}>
      <div className="avatar-ring">✨</div>
      <h4>Desarrollador Vibe</h4>
      <span className="status-badge">● {status}</span>
    </div>
  );
}`,
    },
    {
      id: 'reactions',
      title: 'Reacciones Interactivas',
      icon: '❤️',
      prompt: 'Genera una barra de reacciones con feedback táctil visual, contador instantáneo y animaciones de rebote.',
      code: `// Componente de Reacciones React 19
export function ReactionBar({ onReact, counts }) {
  return (
    <div className="reaction-group">
      <button onClick={() => onReact('fire')}>🔥 {counts.fire}</button>
      <button onClick={() => onReact('heart')}>❤️ {counts.heart}</button>
      <button onClick={() => onReact('rocket')}>🚀 {counts.rocket}</button>
    </div>
  );
}`,
    },
    {
      id: 'palette',
      title: 'Selector Dinámico de Color',
      icon: '🎨',
      prompt: 'Crea un selector de temas interactivo que actualice en tiempo real el acento visual de la tarjeta de prueba.',
      code: `// Selector de paletas reactivo
export function ColorPicker({ currentColor, onSelect }) {
  const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'];
  return (
    <div className="palette-row">
      {colors.map(c => (
        <span 
          key={c} 
          style={{ background: c }}
          className={currentColor === c ? 'active' : ''}
          onClick={() => onSelect(c)} 
        />
      ))}
    </div>
  );
}`,
    },
    {
      id: 'idea-generator',
      title: 'Generador de Proyectos',
      icon: '🎯',
      prompt: 'Genera un generador aleatorio de ideas para el proyecto final con etiquetas de stack y descripción clara.',
      code: `// Generador de proyectos para el curso
export function ProjectIdeaCard({ idea, onNext }) {
  return (
    <div className="idea-card">
      <h3>{idea.title}</h3>
      <p>{idea.desc}</p>
      <button onClick={onNext}>Siguiente Idea ✨</button>
    </div>
  );
}`,
    },
  ]

  const handleCopyCode = () => {
    navigator.clipboard.writeText(presets[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCustomPromptSubmit = (e) => {
    e.preventDefault()
    if (!customPrompt.trim()) return

    setCustomResponse({
      text: `¡Excelente visión! Para "${customPrompt}", en el curso aprenderás a estructurarlo con: 1) Arquitectura modular de componentes, 2) Hooks de estado en React 19, y 3) Estilos fluidos.`,
      timestamp: 'Listo para codificar ⚡',
    })
  }

  const handleAddReaction = (type) => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }))
    setLastReacted(type)
    setTimeout(() => setLastReacted(null), 800)
  }

  return (
    <section id="simulador" className="section simulator-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">EXPERIENCIA INTERACTIVA</span>
          <h2 className="section-title">
            Vibe Playground <span className="gradient-text">en Vivo</span>
          </h2>
          <p className="section-subtitle">
            Experimenta en carne propia cómo funciona el Vibe Coding: seleccionas una idea, 
            la IA genera la arquitectura del componente y obtienes una UI 100% interactiva al instante.
          </p>
        </div>

        {/* Preset Tabs */}
        <div className="simulator-tabs">
          {presets.map((preset, index) => (
            <button
              key={preset.id}
              onClick={() => setActiveTab(index)}
              className={`simulator-tab-btn ${activeTab === index ? 'active' : ''}`}
            >
              <span>{preset.icon}</span>
              <span>{preset.title}</span>
            </button>
          ))}
        </div>

        {/* Main Playground Grid */}
        <div className="simulator-grid">
          {/* Left Column: Prompt & Code */}
          <div className="glass-card sim-card-code">
            <div className="sim-panel-header">
              <span className="sim-panel-label">PROMPT DE ENTRADA</span>
              <span className="sim-badge-lang">Intención en Lenguaje Natural</span>
            </div>

            <div className="sim-prompt-box">
              <p className="sim-prompt-quote">“{presets[activeTab].prompt}”</p>
            </div>

            <div className="sim-panel-header code-header">
              <span className="sim-panel-label">CÓDIGO GENERADO (React 19)</span>
              <button onClick={handleCopyCode} className="btn-copy">
                {copied ? '✅ ¡Copiado!' : '📋 Copiar Código'}
              </button>
            </div>

            <div className="sim-code-preview">
              <pre>
                <code>{presets[activeTab].code}</code>
              </pre>
            </div>
          </div>

          {/* Right Column: Live Interactive Component Preview */}
          <div className="glass-card sim-card-preview">
            <div className="sim-panel-header">
              <span className="sim-panel-label">VISTA PREVIA INTERACTIVA</span>
              <span className="preview-live-pill">● COMPONENTE REAL</span>
            </div>

            <div className="sim-interactive-stage">
              {/* Demo 1: Neon Card */}
              {activeTab === 0 && (
                <div
                  className={`demo-neon-container ${neonActive ? 'neon-active' : ''}`}
                  style={{
                    borderColor: neonActive ? 'var(--accent-1)' : 'var(--border-color)',
                    boxShadow: neonActive ? 'var(--accent-glow)' : 'none',
                  }}
                >
                  <div className="demo-neon-top">
                    <div className="demo-avatar">⚡</div>
                    <div>
                      <h4 className="demo-user-name">Estudiante Vibe Coder</h4>
                      <span className="demo-user-status">● {neonStatus}</span>
                    </div>
                  </div>

                  <p className="demo-user-bio">
                    &ldquo;Creando aplicaciones con React 19 y asistencia inteligente sin límites.&rdquo;
                  </p>

                  <div className="demo-controls">
                    <button
                      onClick={() => setNeonActive(!neonActive)}
                      className={`btn-demo ${neonActive ? 'btn-active' : ''}`}
                    >
                      {neonActive ? 'Desactivar Glow' : 'Activar Glow ✨'}
                    </button>
                    <button
                      onClick={() =>
                        setNeonStatus((prev) =>
                          prev === 'Online' ? 'Codificando' : prev === 'Codificando' ? 'En Modo Zen' : 'Online'
                        )
                      }
                      className="btn-demo"
                    >
                      Cambiar Estado
                    </button>
                  </div>
                </div>
              )}

              {/* Demo 2: Reactions */}
              {activeTab === 1 && (
                <div className="demo-reactions-container">
                  <div className="reactions-card-intro">
                    <h4>¿Qué te parece este enfoque?</h4>
                    <p>Haz clic para enviar feedback instantáneo con micro-animación:</p>
                  </div>

                  <div className="reactions-button-row">
                    <button
                      onClick={() => handleAddReaction('fire')}
                      className={`btn-reaction ${lastReacted === 'fire' ? 'reacted-bump' : ''}`}
                    >
                      <span className="reaction-emoji">🔥</span>
                      <span className="reaction-name">Fuego</span>
                      <span className="reaction-count">{reactions.fire}</span>
                    </button>

                    <button
                      onClick={() => handleAddReaction('heart')}
                      className={`btn-reaction ${lastReacted === 'heart' ? 'reacted-bump' : ''}`}
                    >
                      <span className="reaction-emoji">❤️</span>
                      <span className="reaction-name">Amor</span>
                      <span className="reaction-count">{reactions.heart}</span>
                    </button>

                    <button
                      onClick={() => handleAddReaction('rocket')}
                      className={`btn-reaction ${lastReacted === 'rocket' ? 'reacted-bump' : ''}`}
                    >
                      <span className="reaction-emoji">🚀</span>
                      <span className="reaction-name">Despega</span>
                      <span className="reaction-count">{reactions.rocket}</span>
                    </button>
                  </div>

                  {lastReacted && (
                    <div className="reaction-toast">
                      ¡Vibra enviada con éxito! +1 a {lastReacted}
                    </div>
                  )}
                </div>
              )}

              {/* Demo 3: Palette Picker */}
              {activeTab === 2 && (
                <div className="demo-palette-container">
                  <h4>Selector de Color Dinámico</h4>
                  <p>Observa cómo la interfaz responde de forma reactiva al color seleccionado:</p>

                  <div className="palette-swatches">
                    {['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`swatch-btn ${selectedColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        aria-label={`Seleccionar color ${color}`}
                      />
                    ))}
                  </div>

                  <div
                    className="palette-preview-card"
                    style={{
                      borderLeft: `4px solid ${selectedColor}`,
                      background: `${selectedColor}15`,
                    }}
                  >
                    <span style={{ color: selectedColor, fontWeight: 700 }}>
                      Componente Acentuado
                    </span>
                    <p>Color hexadecimal actual: <code>{selectedColor}</code></p>
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ background: selectedColor, borderColor: selectedColor }}
                    >
                      Botón Reactivo
                    </button>
                  </div>
                </div>
              )}

              {/* Demo 4: Idea Generator */}
              {activeTab === 3 && (
                <div className="demo-idea-container">
                  <span className="idea-badge">Propuesta #{currentIdeaIndex + 1} de {projectIdeas.length}</span>
                  <h4 className="idea-title">{projectIdeas[currentIdeaIndex].title}</h4>
                  <p className="idea-desc">{projectIdeas[currentIdeaIndex].desc}</p>
                  <div className="idea-stack">
                    <strong>Stack:</strong> <code>{projectIdeas[currentIdeaIndex].stack}</code>
                  </div>
                  <button
                    onClick={() =>
                      setCurrentIdeaIndex((prev) => (prev + 1) % projectIdeas.length)
                    }
                    className="btn btn-secondary btn-next-idea"
                  >
                    🎲 Explorar Otra Idea
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Prompt Interactive Box */}
        <div className="custom-prompt-section glass-card">
          <div className="custom-prompt-header">
            <span className="custom-prompt-icon">💭</span>
            <div>
              <h3>¿Tienes una idea en mente para programar?</h3>
              <p>Escribe qué te gustaría construir con React y pon a prueba tu capacidad de prompting:</p>
            </div>
          </div>

          <form onSubmit={handleCustomPromptSubmit} className="custom-prompt-form">
            <input
              type="text"
              placeholder="Ej: Crea una calculadora de propinas con selector de emojis y modo oscuro..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="custom-prompt-input"
            />
            <button type="submit" className="btn btn-primary btn-submit-prompt">
              Evaluar Vibe ⚡
            </button>
          </form>

          {customResponse && (
            <div className="custom-response-card">
              <div className="custom-response-top">
                <span className="bot-tag">🤖 Mentor de Vibe Coding</span>
                <span className="timestamp">{customResponse.timestamp}</span>
              </div>
              <p className="custom-response-text">{customResponse.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

