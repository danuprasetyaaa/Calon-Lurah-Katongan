'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Heart, TrendingUp, Building2, Leaf, BookOpen, Users, Accessibility, ExternalLink } from 'lucide-react'
import { candidate, vision, missions, contact } from '@/data/content'
import { Header } from '@/components/ui/header'
import { TextEffect } from '@/components/ui/text-effect'

// Map icon strings to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Heart, TrendingUp, Building2, Leaf, BookOpen, Users, Accessibility
}

export default function Page() {
  const visiRef = useRef(null)
  const isVisiInView = useInView(visiRef, { once: true, amount: 0.2 })

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* HEADER / NAVBAR */}
      <Header />

      {/* HERO SECTION */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/30 min-h-[90vh]">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-emerald-100/40 blur-3xl -z-10 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-3xl -z-10 opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent"></span>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Calon Lurah Katongan 2026</span>
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
          <TextEffect trigger={isVisiInView} delay={0.2} as="h2" per="char" preset="blur" className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12">
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
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Misi Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Langkah Nyata untuk Katongan.</h2>
            <p className="text-lg text-muted-foreground">Tujuh komitmen utama untuk mewujudkan visi bersama, dengan pendekatan kerja yang transparan, inovatif, dan berpihak penuh pada masyarakat.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {missions.map((mission, idx) => {
              const IconComp = iconMap[mission.icon || 'Check'] || Check;
              return (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComp size={24} />
                    </div>
                    <span className="text-4xl font-serif text-border font-bold group-hover:text-primary/20 transition-colors duration-300">{String(mission.id).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{mission.description}</p>
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
