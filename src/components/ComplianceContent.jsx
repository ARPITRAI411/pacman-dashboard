export function ComplianceContent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#E91E63]">99.82%</h1>
      <p className="text-sm text-[#E91E63]">Compliance All Apps</p>

      <p className="mt-2 text-gray-600">
        <span className="font-bold text-black">58</span> Rules
      </p>

      <div className="flex justify-around mt-6 text-sm">
        <div>
          <p className="text-[#E91E63] font-bold">98.4%</p>
          <p className="text-gray-500">TMNG</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">98.1%</p>
          <p className="text-gray-500">REBL</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">96.7%</p>
          <p className="text-gray-500">SOCL</p>
        </div>
      </div>
    </div>
  )
}