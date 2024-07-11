"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", ventes: 80 },
  { month: "Fev", ventes: 305 },
  { month: "Mar", ventes: 237 },
  { month: "Avr", ventes: 79 },
  { month: "Mai", ventes: 250 },
  { month: "Jun", ventes: 125 },
  { month: "Jul", ventes: 340 },
  { month: "Aou", ventes: 190 },
  { month: "Sep", ventes: 88 },
  { month: "Oct", ventes: 120 },
  { month: "Nov", ventes: 150 },
  { month: "Dec", ventes: 180 },
];

const chartConfig = {
  ventes: {
    label: "Ventes",
    color: "#2563eb",
  },
  devise: {
    label: "Devise",
    color: "#2563eb",
  },
  valeur: {
    label: "Valeur",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function ChartCommande() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full ">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} />

        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="ventes" fill="var(--color-ventes)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
