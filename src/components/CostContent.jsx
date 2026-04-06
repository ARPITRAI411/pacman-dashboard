import React from "react"
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  
} from "recharts"
export function CostContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-accent">$24.0K</h1>
        <p className="text-xs text-accent leading-tight">
          /Day <br /> Run Rate
        </p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[50%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">$24.0K</h1>
        <p className="text-sm text-accent mt-1">/Day Run Rate</p>
      </div>

      <div className="mt-6">
        <p className="text-accent font-semibold">$0.40</p>
        <p className="text-xs text-gray-500">/Instance HR</p>
      </div>
    </div>
  )
}

export function DetailedCostContent() {
  const data = [
    { name: "JUN", actual: 700, projected: 500, run: 0.5 },
    { name: "JUL", actual: 500, projected: 600, run: 0.42 },
    { name: "AUG", actual: 600, projected: 750, run: 0.45 },
    { name: "SEP", actual: 300, projected: 600, run: 0.38 },
    { name: "OCT", actual: 0, projected: 520, run: 0.35 },
    { name: "NOV", actual: 0, projected: 650, run: 0.4 },
  ]

  return (
    <div className=" flex-col w-full  pb-5 h-full px-6 ">

      {/* HEADER */}
     

      {/* CHART */}
      <div className="h-[260px] w-full ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            {/* X Axis */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#6b7280",
                fontWeight: 600,
              }}
            />

            {/* LEFT Y */}
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(v) => (v === 0 ? "$0" : `$${v}k`)}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              width={55}
            />

            {/* RIGHT Y */}
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, 0.5]}
              ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
              width={40}
            />

            {/* GRID (important for look) */}
            <CartesianGrid
              stroke="#e5e7eb"
              vertical={false}
             
            />

            {/* BARS */}
            <Bar
              dataKey="actual"
              fill="#D20989"
              radius={[4, 4, 0, 0]}
              barSize={22}
            />
            <Bar
              dataKey="projected"
              fill="#c4c4c4"
              radius={[4, 4, 0, 0]}
              barSize={22}
            />

            {/* LINE */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="run"
              stroke="#9ca3af"
              strokeWidth={2}
              strokeDasharray="3 4"
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="flex w-[90%] ml-10 justify-between items-center gap-3 text-[11px] font-light tracking-[0.18em] text-gray-500 mt-3">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-accent" />
          ACTUAL<br />COST
        </span>

        <span className="flex items-center gap-2">
          <span className="w-4 border-t-2 border-atext-accent" />
          ACTUAL <br /> RUN RATE
        </span>

        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-accent" />
          PROJECTED <br />COST
        </span>

        <span className="flex items-center gap-2">
          <span className="w-4 border-t-2 border-dashed border-gray-400" />
          PROJECTED <br /> RUN RATE
        </span>
      </div>

      {/* BOTTOM VALUE */}
      <div className="mt-auto flex pt-3">
        <h1 className="text-[34px] font-extrabold text-accent leading-none">
          $24.0K
        </h1>
        <p className="text-[10px] font-light text-accent mt-1">
          /Day <br />Run Rate
        </p>
      </div>

    </div>
  )
}