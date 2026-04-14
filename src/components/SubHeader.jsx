import { Filter } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
export function SubHeader() {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className="mt-4 mx-auto w-[90%] flex items-center justify-between bg-white h-12 px-4 shadow-sm">
      
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-pink-600  fill-accent" />
        <span className="text-[12px] font-bold text-[#1a1a1a]">
          ALL APPLICATIONS
        </span>
      </div>

      {/* RIGHT */}
     <div
  onClick={() => setShowDropdown((prev) => !prev)}
  className="flex items-center justify-between w-[20%] gap-2 border px-4 py-1 text-sm text-gray-700 cursor-pointer"
>
        <h3 className="font-bold text-[12px]">Last 6 Months</h3>
        <h3 className="text-pink-600">▼</h3>
      </div>

      <AnimatePresence>
  {showDropdown && (
    <>
      {/* OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 z-40"
        onClick={() => setShowDropdown(false)}
      />

      {/* DROPDOWN */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute right-[5%] top-[135px] w-[360px] bg-[#6b6b6b]/90 backdrop-blur-md z-50 text-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">

          {/* TIME PERIOD */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-semibold">TIME PERIOD</span>
          </div>

          <div className="border border-gray-300 px-3 py-2 flex justify-between text-sm">
            <span>Last 6 Months</span>
            <span>▼</span>
          </div>

          {/* DATE RANGE */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-5 h-5 rounded-full border-2 border-white"></div>
            <span className="text-sm font-semibold">DATE RANGE</span>
          </div>

          <div className="space-y-3 text-xs text-gray-300">
            <div>
              <p className="mb-1">FROM</p>
              <div className="border border-gray-300 px-3 py-2 flex justify-between">
                <span>From</span>
                <span>📅</span>
              </div>
            </div>

            <div>
              <p className="mb-1">TO</p>
              <div className="border border-gray-300 px-3 py-2 flex justify-between">
                <span>To</span>
                <span>📅</span>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY BUTTON */}
        <div className="bg-[#1f8ea3] text-center py-4 font-bold tracking-wide">
          APPLY
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </div>
  )
}