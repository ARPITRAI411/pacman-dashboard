import { Filter, X, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { SubHeader } from "../SubHeader"

const storageData = [
  { name: "EBS", percent: 30.12, size: "1.25PB", color: "bg-pink-200 border-pink-400" },
  { name: "S3", percent: 36.14, size: "1.5PB", color: "bg-blue-200 border-blue-400" },
  { name: "GLACIER", percent: 18.07, size: "0.75PB", color: "bg-yellow-200 border-yellow-500" },
  { name: "OTHER", percent: 15.66, size: "0.65PB", color: "bg-green-200 border-green-500" },
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

export default function StorageDetailsPage() {
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

        {/* 🔷 STORAGE BLOCKS */}
        <div className="flex w-full h-[250px] mb-8 border-t border-b">

          {storageData.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between items-center flex-1 border-r last:border-none ${item.color}`}
            >
              {/* TOP LABEL */}
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold text-gray-600">
                  {item.name}
                </p>
                <p className="text-sm font-bold text-gray-700">
                  {item.percent}%
                </p>
              </div>

              {/* BOTTOM SIZE */}
              <div className="mb-4 text-sm text-gray-600">
                {item.size}
              </div>
            </div>
          ))}
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