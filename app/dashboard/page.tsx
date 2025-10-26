import data from '@/public/mock/sample-data.json';
import { saldoUtilizable } from '@/lib/finance/calculations';

export default function DashboardPage() {
  const resumen = saldoUtilizable(data);
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Panel DineroClaro</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-100 rounded-2xl">💰 Utilizable: ${resumen.saldoFinal.toFixed(2)}</div>
        <div className="p-4 bg-yellow-100 rounded-2xl">⚖️ IVA: ${resumen.totalIVA.toFixed(2)}</div>
        <div className="p-4 bg-red-100 rounded-2xl">💸 ISR Estimado: ${resumen.totalISR.toFixed(2)}</div>
      </div>
    </main>
  );
}
