import Link from 'next/link'
import Image from 'next/image'
import { kurslar } from './data/kurslar'
import Footer from './Footer/Footer';



export default function Home() {
  return (

   <>
   <header>
      <nav className="bg-gray-400 p-4 flex justify-between items-center shadow gap-2">
        <span className="container mx-auto flex">
          <Link href="/" className="text-white text-lg font-bold">          <img className='w-30' src="4317.png" alt="" />
          </Link>
        </span>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-gray-800 text-lg font-bold">Bosh sahifa</Link>
          <Link href="/kurslar" className="text-gray-800 text-lg font-bold">O‘quv kurslari</Link>
          <Link href="/yangiliklar" className="text-gray-800 text-lg font-bold">Yangiliklar</Link></div>
          <button className= 'text-1xl bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700'>
            connact

          </button>
          
      </nav>
   </header>
    <section className="bg-white p-6 flex" >
      <div><h2 className='text-9xl font-bold text-center mt-10 text-red-500' >
        Everest o‘quv kurslari

      </h2>
      <p>


      </p>

      </div>
      <div>
        <Image src="/4317.png" width={500} height={500} alt="Logo" className="w-1/2 h-auto mx-auto mt-10" />

      </div>
      
    </section>
   
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">O‘quv Kurslari</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kurslar.map((kurs) => (
          <Link key={kurs.id} href={`/kurslar/${kurs.id}`}>
            <div className="border rounded p-4 hover:shadow-lg cursor-pointer">
              <Image src={kurs.rasm} width={300} height={200} alt={kurs.nom} />
              <h2 className="text-xl font-semibold mt-3">{kurs.nom}</h2>
              <p className="text-gray-600">{kurs.tavsif.slice(0, 80)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
    <section className="bg-gray-400 p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Biz haqimizda</h2>
      <p className="text-gray-700">
        Bizning maqsadimiz - zamonaviy texnologiyalarni o‘rganish va ulardan samarali foydalanish. 
        O‘quv kurslarimiz sizga kerakli bilim va ko‘nikmalarni berishga qaratilgan.
      </p>
      <p className="text-gray-700">
        Bizning mutaxassislarimiz sizga eng so‘nggi texnologiyalar va metodologiyalarni o‘rganishga yordam beradi.
        O‘quv jarayoni interaktiv va qiziqarli bo‘lishi uchun barcha imkoniyatlarni yaratamiz.
        Sizning muvaffaqiyatingiz biz uchun muhimdir va biz sizni har doim qo‘llab-quvvatlaymiz.
      </p>
    </section>

    <Footer />

   </>
  )
}
