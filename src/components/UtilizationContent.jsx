export function UtilizationContent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#E91E63]">39%</h1>
      <p className="text-sm text-gray-500">Overall</p>

      <div className="flex justify-around mt-8 text-sm">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#E91E63] rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">CPU</p>
        </div>

        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#E91E63] rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">I/O</p>
        </div>

        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#E91E63] rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">DISK</p>
        </div>
      </div>
    </div>
  )
}