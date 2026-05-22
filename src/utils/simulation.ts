export type SimulationPoint = {
  year: number;
  principal: number;
  gain: number;
  total: number;
};

export const yenFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

export const compactYen = (value: number) => {
  if (value >= 100000000) return `${(value / 100000000).toFixed(1)}億円`;
  if (value >= 10000) return `${Math.round(value / 10000).toLocaleString("ja-JP")}万円`;
  return yenFormatter.format(value);
};

export function calculateMonthlyCompound(
  monthlyContribution: number,
  years: number,
  annualRate: number,
): SimulationPoint[] {
  const monthlyRate = annualRate / 100 / 12;
  let total = 0;
  const points: SimulationPoint[] = [];

  for (let month = 1; month <= years * 12; month += 1) {
    total = total * (1 + monthlyRate) + monthlyContribution;

    if (month % 12 === 0) {
      const year = month / 12;
      const principal = monthlyContribution * month;
      points.push({
        year,
        principal: Math.round(principal),
        gain: Math.round(total - principal),
        total: Math.round(total),
      });
    }
  }

  return points;
}

export function buildScenarioSeries(rate: number) {
  const monthlyAmounts = [10000, 30000, 50000];
  const years = 20;

  return Array.from({ length: years }, (_, index) => {
    const year = index + 1;
    const row: { year: string; [key: string]: string | number } = { year: `${year}年` };
    monthlyAmounts.forEach((amount) => {
      const points = calculateMonthlyCompound(amount, year, rate);
      const point = points[points.length - 1];
      row[`${amount / 10000}万円`] = point?.total ?? 0;
    });
    return row;
  });
}
