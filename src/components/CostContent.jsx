export function CostContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-[#E91E63]">$24.0K</h1>
        <p className="text-xs text-[#E91E63] leading-tight">
          /Day <br /> Run Rate
        </p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[50%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-[#E91E63]">$24.0K</h1>
        <p className="text-sm text-[#E91E63] mt-1">/Day Run Rate</p>
      </div>

      <div className="mt-6">
        <p className="text-[#E91E63] font-semibold">$0.40</p>
        <p className="text-xs text-gray-500">/Instance HR</p>
      </div>
    </div>
  )
}