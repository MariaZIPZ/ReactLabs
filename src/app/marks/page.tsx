import Link from 'next/link';

import MarksTable from "@/components/marks/MarksTable";
import data from "@/marks.json";

export default function MarksPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Мої оцінки</h1>

      <MarksTable marks={data}/>

      <Link href="/" className="text-blue-600 hover:underline">
        На головну
      </Link>
    </main>
  )
}