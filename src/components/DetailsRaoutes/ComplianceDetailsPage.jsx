import { Filter, X, Search } from "lucide-react"
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
import { useEffect, useState } from "react"
import { getComplianceData } from "../../services/api"





export default function ComplianceDetailsPage() {
  const navigate = useNavigate()

  const [data, setData] = useState([])

  useEffect(() => {
    getComplianceData().then(res => {
      setData(res.data)
    })
  }, [])
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

          <div className="flex items-center gap-6 text-[#D20989] font-bold text-[13px]">
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

    <tbody>
  {data.map((row, i) => (
    <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
      <td className="py-2">{row.name}</td>
      <td>{row.value}%</td>
      <td>{row.remaining}%</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  ))}
</tbody>

      </div>
    </div>
  )
}