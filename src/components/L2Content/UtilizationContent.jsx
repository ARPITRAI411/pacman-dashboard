import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

import { useEffect, useState } from "react"
import { getUtilizationData } from "../../services/api"

export function UtilizationContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-accent">39%</h1>
        <p className="text-xs text-accent">Overall</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[40%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">39%</h1>
        <p className="text-sm text-accent">Overall</p>
      </div>

      <div className="flex justify-around mt-8 text-sm">
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-accent rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">CPU</p>
        </div>
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-accent rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">I/O</p>
        </div>
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-accent rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">DISK</p>
        </div>
      </div>
    </div>
  )
}
export function DetailedUtilizationContent() {

   const [data, setData] = useState([])

  useEffect(() => {
    getUtilizationData().then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <div className="flex flex-col h-full px-6 pt-4 pb-4">

      {/* CPU */}
      <div className="flex items-center gap-3 h-[70px]">

  {/* LEFT LABEL (MATCH DETAILS PAGE) */}
  <div className="w-[60px] flex items-center justify-center">
    <span className="rotate-[-90deg] text-gray-500 text-xs tracking-wide">CPU</span>
  </div>

  {/* CHART */}
  <div className="flex-1">
    <ResponsiveContainer width="100%" height={65}>
      <LineChart data={data}>
        <Line
          type="natural"
          dataKey="cpu"
          stroke="#E91E63"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

      {/* IO */}
   <div className="flex items-center gap-3 h-[70px] mt-5">

  <div className="w-[60px] flex items-center justify-center">
    <span className="rotate-[-90deg] text-gray-500 text-xs tracking-wide">I/O</span>
  </div>

  <div className="flex-1">
    <ResponsiveContainer width="100%" height={65}>
      <LineChart data={data}>
        <Line
          type="natural"
          dataKey="io1"
          stroke="#8BC34A"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="natural"
          dataKey="io2"
          stroke="#9C27B0"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

      {/* DISK */}
     <div className="flex items-center gap-3 h-[70px] mt-5">

  <div className="w-[60px] flex items-center justify-center">
    <span className="rotate-[-90deg] text-gray-500 text-xs tracking-wide">DISK</span>
  </div>

  <div className="flex-1">
    <ResponsiveContainer width="100%" height={65}>
      <LineChart data={data}>
        <Line
          type="natural"
          dataKey="disk1"
          stroke="#FF9800"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="natural"
          dataKey="disk2"
          stroke="#0288D1"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

      {/* Bottom */}
      <div className="mt-13">
        <h1 className="text-[30px] font-bold text-[#E91E63] leading-none">
          39<span className="text-lg align-top">%</span>
          <span className="text-sm font-medium text-[#E91E63] ml-2">
            Overall
          </span>
        </h1>
      </div>

    </div>
  )
}