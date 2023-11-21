import Link from 'next/link';

import VirtualizedList from "@/components/virtualized-list/VirtualizedList";

export default function VirtualizedListPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Our products</h1>

      <VirtualizedList/>

      <Link href="/" className="text-blue-600 hover:underline">
        To main
      </Link>
    </main>
  )
}