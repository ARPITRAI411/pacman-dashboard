import { Filter, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { SubHeader } from "../SubHeader"

const data = [
  { name: "SECURITY", value: 30, remaining: 70 },
  { name: "TAGGING", value: 50, remaining: 50 },
  { name: "CERTIFICATES", value: 65, remaining: 35 },
  { name: "PATCHING", value: 75, remaining: 25 },
  { name: "SOX", value: 60, remaining: 40 },
  { name: "CLOUD OP", value: 25, remaining: 75 },
]

const tableData = Array.from({ length: 12 }, (_, i) => ({
  label1: `Data R${i + 1}C1`,
  number: i + 1,
  date: `0${i + 1}/08/16`,
  label4: `Data R${i + 1}C4`,
  label5: `Data R${i + 1}C5`,
  label6: `Data R${i + 1}C6`,
  label7: `Data R${i + 1}C7`,
}))

export default function ComplianceDetailsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">

     <SubHeader />

      {/* 🔥 MAIN */}
      <div className="mx-auto w-[90%] mt-4 bg-white p-8 shadow-md">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[28px] font-bold text-[#5f6b76]">
              COMPLIANCE
            </h1>
            <p className="text-gray-500 text-sm mt-1">All Apps</p>
          </div>

          <div className="flex items-center gap-6 text-pink-600 font-semibold text-sm">
            <span>⬇ DOWNLOAD</span>
            <span>🔗 SHARE</span>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-600 text-white rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 📊 BAR CHART */}
       <div className="h-[300px] mb-8">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} barCategoryGap="40%">

      {/* GRID */}
      <CartesianGrid stroke="#d1d5db" vertical={false} />

      {/* AXIS */}
      <XAxis
        dataKey="name"
        tick={{ fontSize: 12 }}
        axisLine={false}
        tickLine={false}
      />

      <YAxis
        domain={[0, 100]}
        tickFormatter={(v) => `${v}%`}
        tick={{ fontSize: 12 }}
        axisLine={false}
        tickLine={false}
      />

      {/* 🔥 PINK BAR */}
      <Bar
        dataKey="remaining"
        stackId="a"
        fill="#ED0295"
       
      />

      {/* grey BAR */}
      <Bar
        dataKey="value"
        stackId="a"
        fill="#BDBDBD"
        
      />

    </BarChart>
  </ResponsiveContainer>
</div>

        {/* 🔽 TABLE HEADER */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 text-sm">Showing 12 Records</p>

          <div className="flex items-center gap-2">
            <button className="bg-gray-200 p-2">🔽</button>
            <input
              type="text"
              placeholder="SEARCH"
              className="border px-3 py-2 text-sm"
            />
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
                <tr
                  key={i}
                  className={`${
                    i % 2 === 1 ? "bg-gray-100" : ""
                  }`}
                >
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