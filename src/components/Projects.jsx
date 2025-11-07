import React from 'react'

const projects = [
  {
    title: 'Portfolio Minimal',
    desc: 'Situs portofolio sederhana dengan fokus pada tipografi dan ruang kosong.',
    link: '#'
  },
  {
    title: 'Komponen UI',
    desc: 'Koleksi komponen kecil yang dapat digunakan ulang untuk proyek web.',
    link: '#'
  },
  {
    title: 'Catatan Pribadi',
    desc: 'Aplikasi catatan ringan yang cepat dan aman.',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-slate-900">Proyek</h2>
        <a href="#" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">Lihat semua</a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex h-28 items-center justify-center rounded-lg bg-slate-50 text-slate-400">Preview</div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-700">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
