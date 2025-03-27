import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e6] text-[#6b5834] flex flex-col overscroll-contain">
      {/*first section  */}
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-between max-w-4xl">
        <div className="text-center space-y-8 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-wide">GBI APOSTOLIC CENTER</h1>

          <div className="relative w-32 h-32">
            <Image src="/logo-gbi.png" alt="GBI Logo" width={128} height={128} className="object-contain" />
          </div>

          <div className="space-y-4 mt-8">
            <h2 className="text-5xl font-serif italic tracking-wide">&quot;Bangkit</h2>
            <h2 className="text-5xl font-serif italic tracking-wide">Menjadi Teranglah&quot;</h2>
            <p className="text-xl mt-4">YESAYA 60:1 & IMAMAT 6: 12-13</p>
          </div>
        </div>

        <nav className="w-full mt-16 border-t border-b border-[#6b5834]">
          <ul className="flex justify-between text-xl py-4">
            <li className="px-4">
              <Link href="/about">Tentang Kami</Link>
            </li>
            <li className="px-4">
              <Link href="/development">Pembangunan Gereja</Link>
            </li>
            <li className="px-4">
              <Link href="/news">Warta Sepekan</Link>
            </li>
          </ul>
        </nav>
      </div>

      <footer className="bg-[#f0e4c0] py-6 w-full">
        <div className="container mx-auto text-center">
          <p className="text-xl">SELAMAT DATANG, TUHAN YESUS MEMBERKATI!</p>
        </div>
      </footer>
      {/* second section */}
      <section className="w-full py-12">
        <div className="relative w-full h-[600px]">
          <Image src="/church-building.jpg" alt="GBI Church Building" fill className="object-cover" />
          <div className="absolute inset-0 bg-gray-700/70 p-12 flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif text-white mb-8">Tentang Kami</h2>

            <p className="text-white text-lg mb-8">
              Write a paragraph that talks about your organization here. You can talk about your background, history,
              mission, vision, or philosophy. Anything that will introduce your org's persona to your audience. This
              will help build a connection between you and them, that hopefully leads into a working relationship.
            </p>

            <p className="text-white text-lg">
              Write a paragraph that talks about your organization here. You can talk about your background, history,
              mission, vision, or philosophy. Anything that will introduce your org's persona to your audience. This
              will help build a connection between you and them, that hopefully leads into a working relationship.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#f0e4c0] text-[#6b5834] font-medium rounded hover:bg-[#e5d9b5] transition-colors"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

