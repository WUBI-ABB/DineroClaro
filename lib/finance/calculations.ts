export function extractIVA(amount: number, rate = 0.16) {
  const base = amount / (1 + rate);
  const iva = amount - base;
  return { base, iva };
}

export function estimateISR(monthlyIncome: number) {
  if (monthlyIncome <= 746.04) return monthlyIncome * 0.0192;
  if (monthlyIncome <= 6332.05) return 142.12 + (monthlyIncome - 746.04) * 0.064;
  if (monthlyIncome <= 11128.01) return 371.83 + (monthlyIncome - 6332.05) * 0.1088;
  if (monthlyIncome <= 12935.82) return 893.63 + (monthlyIncome - 11128.01) * 0.16;
  if (monthlyIncome <= 15487.71) return 1182.88 + (monthlyIncome - 12935.82) * 0.1792;
  return 1500 + (monthlyIncome - 15487.71) * 0.2136;
}

export function createMSI(total: number, months: number, startMonth: number) {
  const perMonth = total / months;
  return Array.from({ length: months }, (_, i) => ({
    month: startMonth + i,
    payment: parseFloat(perMonth.toFixed(2)),
  }));
}

export function saldoUtilizable({ ingresos, gastos }: any) {
  const totalIVA = ingresos.reduce((acc: number, i: any) => acc + (i.iva || 0), 0) - gastos.reduce((acc: number, g: any) => acc + (g.iva || 0), 0);
  const totalISR = estimateISR(ingresos.reduce((acc: number, i: any) => acc + i.monto, 0));
  const saldoFinal = ingresos.reduce((acc: number, i: any) => acc + i.monto, 0) - gastos.reduce((acc: number, g: any) => acc + g.monto, 0) - totalISR;
  return { totalIVA, totalISR, saldoFinal };
}
