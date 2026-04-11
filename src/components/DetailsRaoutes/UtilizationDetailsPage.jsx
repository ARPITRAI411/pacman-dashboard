import { Filter, X, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { SubHeader } from "../SubHeader"

const cpuData = Array.from({ length: 30 }, (_, i) => ({
  name: i,
  value: 8 + Math.random() * 6,
}))

const ioData = Array.from({ length: 30 }, (_, i) => ({
  name: i,
  v1: 120 + Math.random() * 60,
  v2: 140 + Math.random() * 50,
}))

const diskData = Array.from({ length: 30 }, (_, i) => ({
  name: i,
  v1: 20 + Math.random() * 10,
  v2: 45 + Math.random() * 10,
}))

const tableData = Array.from({ length: 12 }, (_, i) => ({
  label1: `Data R${i + 1}C1`,
  number: i + 1,
  date: `0${i + 1}/08/16`,
  label4: `Data R${i + 1}C4`,
  label5: `Data R${i + 1}C5`,
  label6: `Data R${i + 1}C6`,
  label7: `Data R${i + 1}C7`,
}))
export default function UtilizationDetailsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">

    <SubHeader />

      {/* 🔥 MAIN CARD */}
      <div className="mx-auto w-[90%] mt-4 bg-white p-8 shadow-md">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[28px] font-bold text-[#5f6b76]">
              UTILIZATION
            </h1>
            <p className="text-gray-500 text-sm mt-1">All Apps</p>
          </div>

          <div className="flex items-center gap-6 text-pink-600 font-semibold text-sm">
            <span className="cursor-pointer">⬇ DOWNLOAD</span>
            <span className="cursor-pointer">🔗 SHARE</span>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-600 text-white rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 🔴 CPU */}
      <div className="mb-10 flex">

  {/* LEFT LABEL */}
  <div className="w-[60px] flex items-center justify-center">
    <span className="rotate-[-90deg] text-gray-500 text-xs">CPU</span>
  </div>

  {/* CHART */}
  <div className="flex-1 h-[150px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={cpuData}>
        
        <CartesianGrid stroke="#e5e7eb" vertical={false} />

        <YAxis
          domain={[0, 20]}
          tickFormatter={(v) => `${v}%`}
          tick={{ fontSize: 12, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
        />

        <XAxis hide />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#E91E63"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

        {/* 🟢 IO */}
    <div className="mb-10 flex">

  <div className="w-[60px] flex items-center justify-center">
    <span className="rotate-[-90deg] text-gray-500 text-xs">I/O</span>
  </div>

  <div className="flex-1 h-[150px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={ioData}>

        <CartesianGrid stroke="#e5e7eb" vertical={false} />

        <YAxis
          tickFormatter={(v) => `${Math.round(v)} kb/s`}
          tick={{ fontSize: 12, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
        />

        <XAxis hide />

        <Line dataKey="v1" stroke="#7c3aed" strokeWidth={2} dot={false} />
        <Line dataKey="v2" stroke="#84cc16" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

        {/* 🔵 DISK */}
       <div className="flex">

  <div className="w-[60px] flex items-center justify-center">
    <span className="rotate-[-90deg] text-gray-500 text-xs">DISK</span>
  </div>

  <div className="flex-1 h-[150px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={diskData}>

        <CartesianGrid stroke="#e5e7eb" vertical={false} />

        <YAxis
          tickFormatter={(v) => `${Math.round(v)} MB`}
          tick={{ fontSize: 12, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
        />

        <XAxis hide />

        <Line dataKey="v1" stroke="#0ea5e9" strokeWidth={2} dot={false} />
        <Line dataKey="v2" stroke="#f59e0b" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

{/* 🔽 TABLE HEADER */}
<div className="mt-8 pt-5 pb-5 border-y border-gray-400 flex justify-between items-center bg-white">

  {/* LEFT */}
  <p className="text-[14px] text-gray-500">
    Showing <span className="font-medium text-gray-700">12</span> Records
  </p>

  
  <div className="flex items-center gap-3">

   
    <button className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-200">
      <Filter className="h-5 w-5 text-gray-400 fill-gray-400" />
    </button>

    {/* SEARCH */}
    <div className="flex items-center border border-gray-300 px-3 h-10 w-[220px]">
      <Search size={16} className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="SEARCH"
        className="outline-none text-sm w-full placeholder:text-gray-400"
      />
    </div>

  </div>
</div>

{/* 📋 TABLE */}
<div className="overflow-hidden border-t">
  <table className="w-full text-sm">
    <thead className="text-left border-b">
      <tr>
        <th className="py-2">Label 1</th>
        <th>Number</th>
        <th>Date</th>
        <th>Label 4</th>
        <th>Label 5</th>
        <th>Label 6</th>
        <th>Label 7</th>
      </tr>
    </thead>

    <tbody>
      {tableData.map((row, i) => (
        <tr key={i} className={`${i % 2 === 1 ? "bg-gray-100" : ""}`}>
          <td className="py-2">{row.label1}</td>
          <td>{row.number}</td>
          <td>{row.date}</td>
          <td>{row.label4}</td>
          <td>{row.label5}</td>
          <td>{row.label6}</td>
          <td>{row.label7}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}