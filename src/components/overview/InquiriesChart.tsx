"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { inquiriesByHome } from "@/data/homes";

export function InquiriesChart() {
  return (
    <Card className="animate-fade-in animate-delay-3">
      <CardHeader>
        <CardTitle>Inquiries & tours by home</CardTitle>
        <p className="text-sm text-[var(--muted)]">
          Last 30 days · sample data
        </p>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <div className="h-56 w-full min-w-0 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={inquiriesByHome}
              barGap={4}
              margin={{ top: 4, right: 4, left: -8, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e4e0d8"
                vertical={false}
              />
              <XAxis
                dataKey="home"
                tick={{ fill: "#5f6f68", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                interval={0}
              />
              <YAxis
                allowDecimals={false}
                width={28}
                tick={{ fill: "#5f6f68", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "rgba(44,95,79,0.04)" }}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e4e0d8",
                  boxShadow: "0 4px 12px rgba(28,45,38,0.06)",
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
              <Bar
                dataKey="inquiries"
                name="Inquiries"
                fill="#2c5f4f"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="tours"
                name="Tours"
                fill="#c4785a"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
