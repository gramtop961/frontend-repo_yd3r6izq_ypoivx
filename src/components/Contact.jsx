import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Kontak</h2>
        <p className="mt-2 text-slate-600">Ingin berdiskusi atau bekerja sama? Kirim pesan melalui email di bawah ini.</p>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Nama</label>
            <input type="text" placeholder="Nama Anda" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none ring-0 focus:border-emerald-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" placeholder="email@contoh.com" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none ring-0 focus:border-emerald-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Pesan</label>
            <textarea rows="4" placeholder="Tulis pesan singkat..." className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none ring-0 focus:border-emerald-500" />
          </div>
          <div className="sm:col-span-2">
            <button type="button" className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-emerald-700">Kirim</button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">Atau langsung email: <a className="font-medium text-emerald-700 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
    </section>
  )
}

export default Contact
