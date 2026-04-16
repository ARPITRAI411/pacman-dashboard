import { Filter, X, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { SubHeader } from "../SubHeader"
import { useEffect, useState } from "react"
import { getStorageData } from "../../services/api"

export default function StorageDetailsPage() {
  const navigate = useNavigate()
  const [storageData, setStorageData] = useState([])

  useEffect(() => {
    getStorageData().then(res => {
      setStorageData(res.data)
    })
  }, [])

  return (
    <div className="min-h-screen">
      <SubHeader />

      <div className="mx-auto w-[90%] mt-4 bg-white p-8 shadow-md">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[28px] font-bold text-[#5f6b76]">
              STORAGE
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

        {/* STORAGE BLOCKS */}
        <div className="flex w-full h-[250px] mb-8 border-t border-b">
          {storageData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between items-center flex-1 border-r last:border-none"
            >
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold text-gray-600">
                  {item.name}
                </p>
                <p className="text-sm font-bold text-gray-700">
                  {item.percent}%
                </p>
              </div>

              <div className="mb-4 text-sm text-gray-600">
                {item.size}PB
              </div>
            </div>
          ))}
        </div>

        {/* TABLE HEADER */}
        <div className="mt-8 pt-5 pb-5 border-y border-gray-400 flex justify-between items-center">
          <p className="text-[14px] text-gray-500">
            Showing <span className="font-medium text-gray-700">{storageData.length}</span> Records
          </p>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 border">
              <Filter className="h-5 w-5 text-gray-400" />
            </button>

            <div className="flex items-center border px-3 h-10 w-[220px]">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="SEARCH"
                className="outline-none text-sm w-full"
              />
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden border-t">
          <table className="w-full text-sm">
            <thead className="text-left border-b">
              <tr>
                <th>Type</th>
                <th>Usage %</th>
                <th>Size (PB)</th>
              </tr>
            </thead>

            <tbody>
              {storageData.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-gray-100" : ""}>
                  <td className="py-2">{row.name}</td>
                  <td>{row.percent}%</td>
                  <td>{row.size}PB</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}