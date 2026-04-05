export function InventoryContent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#E91E63]">6.5K</h1>
      <p className="text-sm text-gray-500">current instances</p>

      <p className="mt-2 text-gray-600">
        <span className="font-bold">25.0K</span> Unique Last 30 days
      </p>

      <div className="flex justify-around mt-6 text-sm">
        <div>
          <p className="text-[#E91E63] font-bold">153</p>
          <p className="text-gray-500">LBs</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">57</p>
          <p className="text-gray-500">ASG</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">132</p>
          <p className="text-gray-500">S3</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">9000</p>
          <p className="text-gray-500">EBS</p>
        </div>
      </div>
    </div>
  )
}