import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Line,
  
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
  { name: "FEB", actual: 900, projected: 600, runRate: 0.45 },
  { name: "MAR", actual: 700, projected: 300, runRate: 0.25 },
  { name: "APR", actual: 500, projected: 600, runRate: 0.3 },
  { name: "MAY", actual: 900, projected: 720, runRate: 0.4 },
  { name: "JUN", actual: 700, projected: 500, runRate: 0.35 },
  { name: "JUL", actual: 500, projected: 600, runRate: 0.32 },
  { name: "AUG", actual: 550, projected: 750, runRate: 0.38 },
  // { name: "SEP", actual: 300, projected: 900, runRate: 0.28 },
  // { name: "OCT", actual: 0, projected: 920, runRate: 0.25 },
  // { name: "NOV", actual: 0, projected: 900, runRate: 0.35 },
]

  return (
    <div className="flex flex-col h-full px-6 pt-4 pb-6">

      {/* CHART */}
      <div className="w-full h-[200px]">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0}>

            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            {/* X AXIS */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* LEFT Y AXIS (COST) */}
            <YAxis
              yAxisId="left"
              tickFormatter={(v) =>
                v === 0 ? "$0" : `$${v}k`
              }
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              label={{
    value: "COST",
    angle: -90,
    position: "insideLeft",
    dx: -5, 
    dy: 30,    
    style: { fill: "#6b7280", fontSize: 12 },
  }}
            />

            {/* RIGHT Y AXIS (RUN RATE) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 0.5]}
              ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
               label={{
    value: "RUN RATE",
    angle: 90,
    position: "insideRight",
    style: { fill: "#6b7280", fontSize: 12 },
    dx: -5,   
    dy: 40,    
  }}
            />

            {/* BARS */}
            <Bar
              yAxisId="left"
              dataKey="actual"
              fill="#ff0a78"
            
              barSize={16}
            />

            <Bar
              yAxisId="left"
              dataKey="projected"
              fill="#d1d5db"
           
              barSize={16}
            />
<Line
  yAxisId="right"
  type="monotone"
  dataKey="runRate"
  stroke="#ff0a78"
  dot={false}
  strokeWidth={2}
/>
            {/* DOTTED RUN RATE LINE */}
            <Line
              yAxisId="right"
              type="natural"
              dataKey="runRate"
              stroke="#9ca3af"
              strokeDasharray="3 3"
              dot={false}
              strokeWidth={2}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="flex w-130 ml-10 justify-between  items-center mt-4 text-xs text-gray-500">

        <div className="flex items-center gap-2">
          <div className="w-2 h-3 bg-pink-600"></div>
          <span>ACTUAL COST</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-pink-600 opacity-70"></div>
          <span>ACTUAL RUN RATE</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-300"></div>
          <span>PROJECTED COST</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border border-gray-400 border-dashed"></div>
          <span>PROJECTED RUN RATE</span>
        </div>

      </div>

      {/* BOTTOM VALUE */}
      <div className="mt-8 mr-10">
        <h1 className="text-[30px] font-bold text-[#ff0a78] leading-none">
          $24.0K
          <span className="text-sm ml-2 font-medium text-gray-500">
            /Day Run Rate
          </span>
        </h1>
      </div>

    </div>
  )
}