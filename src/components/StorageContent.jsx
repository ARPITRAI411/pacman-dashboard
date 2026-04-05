export function StorageContent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#E91E63]">4.15</h1>
      <p className="text-sm text-[#E91E63]">PB In Use</p>

      <div className="flex justify-around mt-8 text-sm">
        <div>
          <p className="text-[#E91E63] font-bold">1.25PB</p>
          <p className="text-gray-500">EBS</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">1.50PB</p>
          <p className="text-gray-500">S3</p>
        </div>
        <div>
          <p className="text-[#E91E63] font-bold">0.65PB</p>
          <p className="text-gray-500">Other</p>
        </div>
      </div>
    </div>
  )
}