'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Heart, TrendingUp, Building2, Leaf, BookOpen, Users, Accessibility, ExternalLink, ShieldCheck, HardHat, UsersRound, HandCoins } from 'lucide-react'
import { candidate, vision, missions, contact } from '@/data/content'
import { Header } from '@/components/ui/header'
import { TextEffect } from '@/components/ui/text-effect'

// Map icon strings to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Heart, TrendingUp, Building2, Leaf, BookOpen, Users, Accessibility, ShieldCheck, HardHat, UsersRound, HandCoins
}

const parseMissionPoints = (description: string) => {
  const normalized = description
    .replace(/<br\s*\/?>/gi, ' | ')
    .replace(/\s*;\s*/gi, ' | ')
    .replace(/\s*\|\s*/g, ' | ')
    .trim()

  const segments = normalized
    .split(/\s*\|\s*|\s*(?=[a-d]\s*\.)/i)
    .map((segment) => segment.trim())
    .filter(Boolean)

  if (segments.length > 0) {
    return segments
      .map((segment) => {
        const match = segment.match(/^([a-d])\s*\.\s*(.*)$/i)
        if (!match) {
          const trimmed = segment.trim()
          return trimmed ? { label: '•', text: trimmed } : null
        }

        const text = match[2].trim()
        return text ? { label: match[1].toUpperCase(), text } : null
      })
      .filter((item): item is { label: string; text: string } => Boolean(item))
  }

  return normalized ? [{ label: '•', text: normalized }] : []
}

export default function Page() {
  const visiRef = useRef(null)
  const isVisiInView = useInView(visiRef, { once: true, amount: 0.2 })

  return (
    <main className="min-h-screen bg-background overflow-x-clip selection:bg-primary/20 selection:text-primary">
      {/* HEADER / NAVBAR */}
      <Header />

      {/* HERO SECTION */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/30 min-h-[90vh]">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-emerald-100/40 blur-3xl -z-10 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-3xl -z-10 opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-800 text-white font-serif text-3xl font-bold shadow-xl shadow-primary/20 border-4 border-white">
                {candidate.number}
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest text-accent uppercase mb-0.5">Calon Lurah Katongan 2026</span>
                <span className="text-sm font-medium text-muted-foreground">Kandidat Pilihan Kita</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              Membangun Katongan <br />
              <span className="text-primary italic pr-2">bersama.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {candidate.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#visi" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 duration-300">
                Lihat Visi & Misi <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative animate-fade-in-up delay-200">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/5] max-w-[500px] mx-auto shadow-2xl">
              <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white font-serif text-3xl mb-1">{candidate.name}</p>
                <p className="text-white/80 font-medium text-sm tracking-wide">{candidate.title}</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-40"></div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visiRef} id="visi" className="py-24 md:py-32 bg-foreground text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-3 mb-8 opacity-80">
            <span className="w-8 h-px bg-accent"></span>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Visi Utama</span>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <TextEffect trigger={isVisiInView} delay={0.2} as="h2" per="word" preset="blur" className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mb-12">
            {`"${vision.description}"`}
          </TextEffect>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-sm tracking-[0.2em] text-white/60 uppercase">Arah Perjuangan Katongan 2026</p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section id="misi" className="py-24 md:py-32 bg-muted/50 pb-32 md:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent"></span>
              <span className="text-lg md:text-xl font-serif font-semibold tracking-wide text-accent">Misi Kami</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {missions.map((mission, idx) => {
              const IconComp = iconMap[mission.icon || 'Check'] || Check;
              const points = parseMissionPoints(mission.description)

              return (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="group relative flex flex-col rounded-[28px] border border-border/60 bg-gradient-to-br from-white via-white to-slate-50 p-7 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_24px_60px_-26px_rgba(16,185,129,0.35)]"
                >
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                      <IconComp size={24} />
                    </div>
                    <span className="relative text-4xl font-serif font-bold text-border transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary group-hover:drop-shadow-[0_0_14px_rgba(16,185,129,0.45)]">{String(mission.id).padStart(2, '0')}</span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{mission.title}</h3>

                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {points.map((point) => (
                      <li key={`${mission.id}-${point.label}`} className="group/item flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-[0_8px_20px_-18px_rgba(15,23,42,0.6)]">
                        <span className="relative mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary/10 px-1.5 text-[10px] font-bold tracking-[0.12em] text-primary transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white group-hover/item:shadow-md group-hover/item:shadow-primary/20 group-hover/item:-translate-y-0.5 z-10">
                          {point.label}
                        </span>
                        <span className="flex-1 transition-colors duration-300 group-hover/item:text-foreground">{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground border-t border-white/10 pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <div>
              <h3 className="text-2xl font-serif italic font-bold tracking-wide mb-4">Wasiyat</h3>
              <p className="text-white/60 text-sm max-w-sm italic">
                Untuk Katongan, oleh Katongan, bersama Katongan. Membangun masa depan yang lebih cerah secara gotong royong.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>Calon Lurah Katongan 2026.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
