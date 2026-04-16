import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { useEffect, useState } from "react"
import { getInventoryData } from "../../services/api"

export function InventoryContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center justify-between px-3 gap-3">
        <p className="mt-2 text-gray-600">
        <span className="font-bold">25.0K</span> Unique Last 30 days |
      </p>

        <h1 className="text-xl font-bold text-accent">6.5K</h1>
        <p className="text-xs text-accent">instances</p>
        
      </div>

    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[40%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">6.5K</h1>
        <p className="text-sm text-accent">current instances</p>
      </div>

      <p className="mt-2 text-gray-600">
        <span className="font-bold">25.0K</span> Unique Last 30 days
      </p>

      <div className="flex justify-around mt-6 text-sm">
        <div>
          <p className="text-accent font-bold">153</p>
          <p className="text-gray-500">LBs</p>
        </div>
        <div>
          <p className="text-accent font-bold">57</p>
          <p className="text-gray-500">ASG</p>
        </div>
        <div>
          <p className="text-accent font-bold">132</p>
          <p className="text-gray-500">S3</p>
        </div>
        <div>
          <p className="text-accent font-bold">9000</p>
          <p className="text-gray-500">EBS</p>
        </div>
      </div>
    </div>
  )
}

export function DetailedInventoryContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center justify-between px-3 gap-3 h-full">
        <p className="text-gray-600 text-sm">
          <span className="font-bold">25.0K</span> Unique Last 30 days |
        </p>

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-accent">6.5K</h1>
          <p className="text-xs text-accent">instances</p>
        </div>
      </div>
    )
  }
const [data, setData] = useState([])

  useEffect(() => {
    getInventoryData().then(res => {
      setData(res.data)
    })
  }, [])



  return (
    <div className="flex flex-col h-full px-3">

      {/* CHART */}
      <div className="h-[250px] w-full">
        <ResponsiveContainer  width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 10 }}
          >
            {/* GRID */}
            <CartesianGrid
              stroke="#e5e7eb"
              vertical={true}
              strokeDasharray="3 3"
            />

            {/* X AXIS */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />

            {/* Y AXIS with label */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              label={{
                value: "INSTANCES",
                angle: -90,
                  dx: -10, 
                    dy: 30,  
                position: "insideLeft",
                style: { fill: "#6b7280", fontSize: 12 },
              }}
              width={50}
            />

            {/* MAX */}
            <Line
              type="monotone"
              dataKey="max"
              stroke="#1f8bb4"
              strokeWidth={2.5}
              dot={false}
            />

            {/* MID */}
            <Line
              type="monotone"
              dataKey="mid"
              stroke="#E91E63"
              strokeWidth={2}
              strokeDasharray="2 3"
              dot={false}
            />

            {/* MIN */}
            <Line
              type="monotone"
              dataKey="min"
              stroke="#2e7d6f"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-8 text-[11px] tracking-[0.15em] mb-4 text-gray-500">
        <span className="flex items-center gap-2">
          <span className="w-4 border-t-2 border-[#1f8bb4]" />
          MAX INSTANCES
        </span>

        <span className="flex items-center gap-2">
          <span className="w-4 border-t-2 border-dotted border-[#E91E63]" />
          MID INSTANCES
        </span>

        <span className="flex items-center gap-2">
          <span className="w-4 border-t-2 border-[#2e7d6f]" />
          MIN INSTANCES
        </span>
      </div>

      {/* BOTTOM CONTENT (FIXED VISIBILITY) */}
      <div className="mt-auto pt-4 mb-15">
        <div className="flex items-center gap-3">
          <h1 className="text-[32px] font-bold text-accent leading-none">
            6.5K
          </h1>
          <p className="text-sm text-accent leading-tight">
            current <br /> instances
          </p>
        </div>

        <p className="text-gray-600 mt-2 text-sm">
          <span className="font-semibold">25.0K</span> Unique Last 30 days
        </p>
      </div>

    </div>
  )
}