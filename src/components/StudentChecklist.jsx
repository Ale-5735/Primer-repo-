export default function StudentChecklist({ checklist, onToggleItem, onCheckAll, onReset }) {
  const completedCount = checklist.filter((item) => item.completed).length
  const totalCount = checklist.length
  const percentage = Math.round((completedCount / totalCount) * 100)
  const isAllComplete = completedCount === totalCount

  return (
    <section id="checklist" className="section checklist-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">TU RUTA DE ARRANQUE</span>
          <h2 className="section-title">
            Checklist de <span className="gradient-text">Bienvenida al Alumno</span>
          </h2>
          <p className="section-subtitle">
            Sigue estos pasos prácticos para asegurarte de tener todo listo antes de sumergirte en el primer módulo.
            ¡Haz clic en cada tarea a medida que la completes!
          </p>
        </div>

        <div className="checklist-card glass-card">
          {/* Progress Header */}
          <div className="checklist-progress-header">
            <div>
              <h3>Tu Progreso Inicial</h3>
              <p className="checklist-subtext">
                {isAllComplete
                  ? '🎉 ¡Felicidades! Tienes todo configurado para ser un Vibe Coder estrella.'
                  : `${completedCount} de ${totalCount} tareas completadas (${percentage}%)`}
              </p>
            </div>
            <div className="checklist-actions">
              <button onClick={onCheckAll} className="btn-text-action">
                Marcar Todos
              </button>
              <button onClick={onReset} className="btn-text-action">
                Reiniciar
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${percentage}%`,
                background: isAllComplete
                  ? 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)'
                  : 'var(--accent-gradient)',
              }}
            ></div>
          </div>

          {/* Checklist Items */}
          <div className="checklist-items">
            {checklist.map((item) => (
              <div
                key={item.id}
                className={`checklist-item ${item.completed ? 'completed' : ''}`}
                onClick={() => onToggleItem(item.id)}
              >
                <div className="custom-checkbox">
                  {item.completed && <span className="checkmark">✓</span>}
                </div>
                <div className="item-content">
                  <div className="item-header-row">
                    <span className="item-title">{item.title}</span>
                    <span className="item-category-tag">{item.category}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Complete Celebration Box */}
          {isAllComplete && (
            <div className="celebration-box animate-pulse-glow">
              <div className="celebration-icon">🚀</div>
              <div className="celebration-text">
                <h4>¡Todo listo para comenzar a programar con Vibe Coding!</h4>
                <p>
                  Tienes la actitud, las herramientas y la visión. Continúa con el Módulo 1 y comparte tus dudas
                  en la comunidad. ¡Bienvenido a bordo!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

