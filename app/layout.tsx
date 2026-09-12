import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Katongan 2026 | Bersama Membangun Katongan yang Lebih Baik',
  description: 'Gerakan Calon Lurah Kalurahan Katongan 2026: menuju kalurahan yang mandiri, sejahtera, dan berkelanjutan.',
  generator: 'v0.app',
  keywords: ['Katongan 2026', 'Calon Lurah Katongan', 'Kalurahan Katongan', 'pemilihan lurah'],
  openGraph: {
    title: 'Katongan 2026 | Bersama Membangun Katongan yang Lebih Baik',
    description: 'Untuk Katongan, oleh Katongan, bersama Katongan.',
    type: 'website',
    locale: 'id_ID',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f3ec', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
