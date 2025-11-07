import React from 'react'

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Minimalist Personal Site
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Halo, saya <span className="underline decoration-emerald-400 decoration-4 underline-offset-4">Nama Kamu</span>
          </h1>
          <p className="max-w-2xl text-slate-600">
            Seorang penggemar teknologi yang suka membangun produk sederhana dengan
            dampak nyata. Fokus pada desain yang bersih, performa, dan UX yang ramah.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href="#about" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
              Kenal saya
            </a>
            <a href="#contact" className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
