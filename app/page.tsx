import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">DineroClaro</h1>
      <p className="mb-4">Sistema de flujo de dinero - MVP</p>
      <Link href="/dashboard" className="text-blue-600 underline">Ir al Dashboard</Link>
    </main>
  )
}
