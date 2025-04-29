import { useRouter } from 'next/router'
import { kurslar } from './data/kurslar'
import Image from 'next/image'

export default function KursSahifasi() {
  const router = useRouter()
  const { id } = router.query
  const kurs = kurslar.find(k => k.id === id)

  if (!kurs) return <div className="p-6">Kurs topilmadi.</div>

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{kurs.nom}</h1>
      <Image src={kurs.rasm} width={500} height={300} alt={kurs.nom} />
      <p className="mt-4 text-lg">{kurs.tavsif}</p>
    </main>
  )
}
