export function MonitoringContent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#E91E63]">3.4M</h1>
      <p className="text-sm text-gray-500">
        Requests Last 5 hours 30 minutes
      </p>

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