import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VibePrinciples from './components/VibePrinciples'
import VibeSimulator from './components/VibeSimulator'
import CourseSyllabus from './components/CourseSyllabus'
import StudentChecklist from './components/StudentChecklist'
import VibeMeter from './components/VibeMeter'
import InfoCards from './components/InfoCards'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('neon')

  // Initial student checklist state
  const [checklist, setChecklist] = useState([
    {
      id: 1,
      title: 'Verificar el entorno de desarrollo',
      description: 'Tener Node.js y Vite corriendo en tu máquina con `npm run dev`.',
      category: 'Entorno',
      completed: true,
    },
    {
      id: 2,
      title: 'Explorar la arquitectura del proyecto',
      description: 'Inspeccionar la carpeta `src/components` y familiarizarse con la estructura modular de React 19.',
      category: 'Código',
      completed: false,
    },
    {
      id: 3,
      title: 'Experimentar con el Vibe Playground',
      description: 'Probar los 4 componentes interactivos y copiar un bloque de código JSX generado.',
      category: 'Práctica',
      completed: false,
    },
    {
      id: 4,
      title: 'Personalizar el tema visual',
      description: 'Cambiar el estilo en la barra de navegación superior (Cyber Neon, Sunset, Matrix o Minimal).',
      category: 'Diseño',
      completed: false,
    },
    {
      id: 5,
      title: 'Comprometerse con el Módulo 1',
      description: 'Revisar los temas del Módulo 1 y preparar tu editor de código para comenzar.',
      category: 'Mindset',
      completed: false,
    },
  ])

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const handleToggleItem = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const handleCheckAll = () => {
    setChecklist((prev) => prev.map((item) => ({ ...item, completed: true })))
  }

  const handleReset = () => {
    setChecklist((prev) =>
      prev.map((item) => ({ ...item, completed: item.id === 1 }))
    )
  }

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme)
    // Automatically mark the theme checklist item as completed!
    setChecklist((prev) =>
      prev.map((item) => (item.id === 4 ? { ...item, completed: true } : item))
    )
  }

  const completedCount = checklist.filter((item) => item.completed).length

  return (
    <div className="app-wrapper">
      <Navbar
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        checklistCompleted={completedCount}
        checklistTotal={checklist.length}
      />

      <main>
        <Hero />
        <VibePrinciples />
        <VibeSimulator />
        <CourseSyllabus />
        <StudentChecklist
          checklist={checklist}
          onToggleItem={handleToggleItem}
          onCheckAll={handleCheckAll}
          onReset={handleReset}
        />
        <VibeMeter />
        <InfoCards />
      </main>

      <Footer />
    </div>
  )
}
