import React from 'react'

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid items-start gap-10 sm:grid-cols-2">
        <div className="order-2 sm:order-1">
          <h2 className="text-2xl font-semibold text-slate-900">Tentang saya</h2>
          <p className="mt-4 text-slate-600">
            Saya adalah pengembang front‑end yang menyukai interface yang sederhana dan mudah digunakan.
            Di waktu senggang, saya menulis, membaca, dan memotret hal‑hal kecil yang sering terlupakan.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-600">
            <li>Fokus: React, TypeScript, dan pengalaman pengguna</li>
            <li>Nilai: kesederhanaan, konsistensi, dan aksesibilitas</li>
            <li>Saat ini: membangun komponen UI minimal untuk proyek pribadi</li>
          </ul>
        </div>
        <div className="order-1 sm:order-2">
          <div className="aspect-square overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="flex h-full items-center justify-center text-slate-400">Foto / Ilustrasi</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
