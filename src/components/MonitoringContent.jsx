import React from "react"
export function MonitoringContent({ compact }) {
  // 🔥 COMPACT VIEW
  if (compact) {
    return (
      <div className="flex items-center justify-between px-3 h-full">
        
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">3,412</span> Unique Visitors
        </p>

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-[#E91E63]">3.4M</h1>
          <p className="text-xs text-[#E91E63] leading-tight">
            Requests <br /> Last 5 hours 30 minutes
          </p>
        </div>

      </div>
    )
  }

  // ✅ DEFAULT (FULL VIEW)
  return (
    <div className="text-center">
      <div className="flex w-[70%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-[#E91E63]">3.4M</h1>
        <p className="text-sm text-[#E91E63]">
          Requests <br />Last 5 hours 30 minutes
        </p>
      </div>

      <p className="mt-2 text-gray-600">
        <span className="font-bold">3,412</span> Unique Visitors
      </p>

      <div className="flex justify-around mt-6 text-sm">
        <div>
          <p className="text-[#E91E63] font-bold">30.5K</p>
          <p className="text-gray-500">TMNG</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">10.0K</p>
          <p className="text-gray-500">SOCL</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">17.4K</p>
          <p className="text-gray-500">REBL</p>
        </div>
      </div>
    </div>
  )
}