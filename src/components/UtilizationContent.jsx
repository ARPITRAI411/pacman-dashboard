export function UtilizationContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-[#E91E63]">39%</h1>
        <p className="text-xs text-[#E91E63]">Overall</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[40%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-[#E91E63]">39%</h1>
        <p className="text-sm text-[#E91E63]">Overall</p>
      </div>

      <div className="flex justify-around mt-8 text-sm">
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#E91E63] rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">CPU</p>
        </div>
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#E91E63] rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">I/O</p>
        </div>
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#E91E63] rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">DISK</p>
        </div>
      </div>
    </div>
  )
}