import { Filter } from "lucide-react"

export function SubHeader() {
  return (
    <div className="mt-4 mx-auto w-[90%] flex items-center justify-between bg-white h-12 px-4 shadow-sm">
      
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-pink-600 fill-accent" />
        <span className="text-[12px] font-bold text-[#1a1a1a]">
          ALL APPLICATIONS
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-between w-[20%] gap-2 border px-4 py-1 text-sm text-gray-700">
        <h3 className="font-bold text-[12px]">Last 6 Months</h3>
        <h3 className="text-pink-600">▼</h3>
      </div>

    </div>
  )
}