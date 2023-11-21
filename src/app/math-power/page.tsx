import Link from 'next/link';

import MathPower from "@/components/mathPower/MathPower";

export default function MathPowerPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Піднесення числа <b>a</b> у степінь <b>b</b></h1>

      <MathPower/>

      <Link href="/" className="text-blue-600 hover:underline">
        На головну
      </Link>
    </main>
  )
}