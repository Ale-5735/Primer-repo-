export default function InfoCards() {
  const cards = [
    {
      id: 1,
      title: 'Comunidad Exclusiva',
      description:
        'Conéctate con otros estudiantes, resuelve dudas en tiempo real y comparte tus proyectos en nuestro canal privado de Discord.',
    },
    {
      id: 2,
      title: 'Proyectos para tu Portafolio',
      description:
        'Construye aplicaciones web modernas, interactivas y listas para producción que demuestren tu dominio en React 19 y desarrollo con IA.',
    },
    {
      id: 3,
      title: 'Certificación Oficial',
      description:
        'Obtén un certificado avalado al completar todos los módulos del curso y entregar con éxito tu proyecto final.',
    },
  ]

  return (
    <section className="section info-cards-section">
      <div className="container">
        <div className="info-cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="glass-card info-card">
              <h3 className="info-card-title">{card.title}</h3>
              <p className="info-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

