import { DetailedCostContent } from "../L2Content/CostContent"
import { Filter, X, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { SubHeader } from "../SubHeader"
import { useEffect, useState } from "react"
import { getCostData } from "../../services/api"

export default function CostDetailsPage() {
  const navigate = useNavigate()
  const [tableData, setTableData] = useState([])

  

useEffect(() => {
  getCostData().then(res => {
    setTableData(res.data)
  })
}, [])

  return (
    <div className="min-h-screen w-[99%] ">

      {/* SUB HEADER */}
      <SubHeader />

      {/* MAIN CONTAINER */}
      <div className="mx-auto w-[90%] mt-4 bg-white p-8 shadow-md ">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          
          <div>
            <h1 className="text-[28px] font-bold text-[#5f6b76]">
              AWS COST MANAGEMENT
            </h1>
            <p className="text-gray-500 text-sm mt-1">All Apps</p>
          </div>

            <div className="flex items-center gap-6 text-[#D20989] font-bold text-[13px]">
            <span className="flex items-center gap-1 cursor-pointer">
              ⬇ DOWNLOAD
            </span>
            <span className="flex items-center gap-1 cursor-pointer">
              🔗 SHARE
            </span>
           <button
        onClick={() => navigate("/")}
        className=" bg-gray-600 text-white rounded-full "
      >
        <X size={14} />
      </button>
          </div>
        </div>

        {/* CHART */}
<div className="w-[90%] ml-15 mb-6">
  <DetailedCostContent />
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
<thead>
  <tr>
    <th>Month</th>
    <th>Actual</th>
    <th>Projected</th>
    <th>Run Rate</th>
  </tr>
</thead>

<tbody>
  {tableData.map((row, i) => (
    <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
      <td className="py-2">{row.month}</td>
      <td>${row.actual}k</td>
      <td>${row.projected}k</td>
      <td>{row.runRate}</td>
    </tr>
  ))}
</tbody>

      </div>
    </div>
  )
}