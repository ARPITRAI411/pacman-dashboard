import { Filter, X, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { DetailedInventoryContent } from "../L2Content/InventoryContent"
import { SubHeader } from "../SubHeader"
import { useEffect, useState } from "react"
import { getInventoryData } from "../../services/api"

export default function InventoryDetailsPage() {
  const navigate = useNavigate()

  const [tableData, setTableData] = useState([])

useEffect(() => {
  getInventoryData().then(res => {
    setTableData(res.data)
  })
}, [])
 

  return (
    <div className="min-h-screen w-[99%]  ">

      {/* 🔹 SUB HEADER */}
      <SubHeader />

      {/* 🔥 MAIN CARD */}
      <div className="mx-auto w-[90%] mt-4 bg-white p-8 shadow-md relative">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
           <h1 className="text-[28px] font-bold text-[#5f6b76]">
              INVENTORY
            </h1>
            <p className="text-gray-500 text-sm mt-1">All Apps</p>
          </div>

            <div className="flex items-center gap-6 text-[#D20989] font-bold text-[13px]">
            <span className="cursor-pointer">⬇ DOWNLOAD</span>
            <span className="cursor-pointer">🔗 SHARE</span>
            <button
          onClick={() => navigate("/")}
          className=" bg-gray-600 text-white rounded-full p-1"
        >
          <X size={16} />
        </button>
            
          </div>
          
        </div>

        
        <div className="w-full mb-6">
  <DetailedInventoryContent />
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
    <th>Date</th>
    <th>Max</th>
    <th>Mid</th>
    <th>Min</th>
    <th>Label 5</th>
    <th>Label 6</th>
    <th>Label 7</th>
  </tr>
</thead>
<tbody>
  {tableData.map((row, i) => (
    <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
      <td className="py-2">{row.date}</td>
      <td>{row.max}</td>
      <td>{row.mid}</td>
      <td>{row.min}</td>
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