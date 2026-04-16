import { useEffect, useState } from "react"
import { getStorageData } from "../../services/api"
export function StorageContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-accent">4.15</h1>
        <p className="text-xs text-accent">PB In Use</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[40%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">4.15</h1>
        <p className="text-sm text-accent">PB In Use</p>
      </div>

      <div className="flex justify-around mt-8 text-sm">
        <div>
          <p className="text-accent font-bold">1.25PB</p>
          <p className="text-gray-500">EBS</p>
        </div>
        <div>
          <p className="text-accent font-bold">1.50PB</p>
          <p className="text-gray-500">S3</p>
        </div>
        <div>
          <p className="text-accent font-bold">0.65PB</p>
          <p className="text-gray-500">Other</p>
        </div>
      </div>
    </div>
  )
}

export function DetailedStorageContent() {
  const [data, setData] = useState([])

  useEffect(() => {
    getStorageData().then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <div className="flex flex-col px-4">

      {/* LABELS */}
      <div className="flex justify-between text-xs mb-1">
        {data.map((item, i) => (
          <span key={i}>{item.name}</span>
        ))}
      </div>

      {/* BLOCK */}
      <div className="flex w-full h-[250px]">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-gray-200 relative"
            style={{ width: `${item.percent}%` }}
          >
            <div className="absolute bottom-0 left-0 w-full h-3 bg-pink-500" />
          </div>
        ))}
      </div>

      {/* VALUES */}
      <div className="flex justify-between mt-2 text-sm">
        {data.map((item, i) => (
          <span key={i}>{item.size}PB</span>
        ))}
      </div>

    </div>
  )
}