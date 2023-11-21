import Link from "next/link";

import TicTacToe from "@/components/tic-tac-toe/TicTacToe";

export default function TicTacToePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Гра хрестики-нулики</h1>

      <TicTacToe/>

      <Link href="/" className="text-blue-600 hover:underline">
        На головну
      </Link>
    </main>
  )
}