import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
export function MonitoringContent({ compact }) {
  // 🔥 COMPACT VIEW
  if (compact) {
    return (
      <div className="flex items-center justify-between px-3 h-full">
        
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">3,412</span> Unique Visitors |
        </p>

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-accent">3.4M</h1>
          <p className="text-xs text-accent leading-tight">
            Requests <br /> Last 5 hours 30 minutes
          </p>
        </div>

      </div>
    )
  }

  // ✅ DEFAULT (FULL VIEW)
  return (
    <div className="text-center">
      <div className="flex w-[70%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">3.4M</h1>
        <p className="text-sm text-accent">
          Requests <br />Last 5 hours 30 minutes
        </p>
      </div>

      <p className="mt-2 text-gray-600">
        <span className="font-bold">3,412</span> Unique Visitors
      </p>

      <div className="flex justify-around mt-6 text-sm">
        <div>
          <p className="text-accent font-bold">30.5K</p>
          <p className="text-gray-500">TMNG</p>
        </div>
        <div>
          <p className="text-accent font-bold">10.0K</p>
          <p className="text-gray-500">SOCL</p>
        </div>
        <div>
          <p className="text-accent font-bold">17.4K</p>
          <p className="text-gray-500">REBL</p>
        </div>
      </div>
    </div>
  )
}


export function DetailedMonitoringContent({ compact }) {
  // 🔥 COMPACT VIEW (NO CHANGE)
  if (compact) {
    return (
      <div className="flex items-center justify-between px-3 h-full">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">3,412</span> Unique Visitors |
        </p>

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-accent">3.4M</h1>
          <p className="text-xs text-accent leading-tight">
            Requests <br /> Last 5 hours 30 minutes
          </p>
        </div>
      </div>
    )
  }

  // 🔥 FULL (L2 VIEW)
  const totalDots = 48

 return (
  <div className="flex flex-col">

    {/* DOT GRID */}
    <div className="grid grid-cols-9 gap-6 justify-items-center mt-3 px-10">
      {Array.from({ length: totalDots }).map((_, i) => {
        let color = "bg-[#65B741]" // softer green like image 2
        let ring = "border-[#65B741]"

        if (i === 5) {
          color = "bg-red-500"
          ring = "border-red-400"
        }

        if (i === 17) {
          color = "bg-yellow-400"
          ring = "border-yellow-300"
        }

        return (
          <div key={i} className="relative flex items-center justify-center">

            {/* outer soft rings */}
            <div className={`absolute w-10 h-10 rounded-full border ${ring} opacity-20`} />
            <div className={`absolute w-8 h-8 rounded-full border ${ring} opacity-30`} />
            <div className={`absolute w-6 h-6 rounded-full border ${ring} opacity-40`} />

            {/* center dot */}
            <div className={`w-5 h-5 rounded-full ${color}`} />

          </div>
        )
      })}
    </div>

    {/* BOTTOM INFO */}
    <div className="mt-auto px-4 pt-3">
      <div className="flex items-center gap-1">
        <h1 className="text-[32px] font-extrabold text-accent ">
          3.4M
        </h1>
        <p className="text-sm text-accent leading-tight">
          Requests <br /> Last 5 hours 30 minutes
        </p>
      </div>

      <p className="text-gray-600 mt-2 text-sm">
        <span className="font-semibold">3,412</span> Unique Visitors
      </p>
    </div>

  </div>
)
}
