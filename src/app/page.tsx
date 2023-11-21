import Link from "next/link";

export default function Home() {
  const linkClasses = `block mb-4 p-4 bg-white border border-gray-200 rounded-lg text-center hover:bg-gray-500 hover:text-white transition duration-300`;

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Лабораторна робота №2</h1>

      <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
        <Link href="/virtualized-list" className={linkClasses}>
          1. Віртуалізований список
        </Link>

        <Link href="/sudoku" className={linkClasses}>
          2. Судоку
        </Link>
      </div>
    </main>
  )
}