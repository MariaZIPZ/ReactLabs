import Link from 'next/link';
import Sudoku from "@/components/sudoku/Sudoku";

export default function SudokuPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Судоку</h1>

      <Sudoku/>

      <Link href="/" className="text-blue-600 hover:underline">
        На головну
      </Link>
    </main>
  )
}