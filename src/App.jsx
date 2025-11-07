import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <About />
      <Projects />
      <Contact />
      <footer className="mx-auto max-w-5xl px-6 py-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nama Kamu — Dibuat dengan cinta dan kesederhanaan.
      </footer>
    </div>
  )
}

export default App
