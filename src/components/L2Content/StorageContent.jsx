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
  const data = [
    {
      label: "EBS",
      value: "1.25PB",
      width: "30%",
      bg: "bg-[#e8cfd2]",
      bar: "bg-[#E91E63]",
      text: "text-red-400",
    },
    {
      label: "S3",
      value: "1.5PB",
      width: "36%",
      bg: "bg-[#c9d6db]",
      bar: "bg-[#6fa3b1]",
      text: "text-blue-400",
    },
    {
      label: "GLACIER",
      value: "0.75PB",
      width: "18%",
      bg: "bg-[#e6dbb5]",
      bar: "bg-[#d4aa00]",
      text: "text-yellow-500",
    },
    {
      label: "OTHER",
      value: "0.65PB",
      width: "16%",
      bg: "bg-[#d9dcc4]",
      bar: "bg-[#9aa300]",
      text: "text-lime-600",
    },
  ]

  return (
    <div className="flex flex-col h- px-4">

      {/* TOP LABELS */}
      <div className="flex w-full justify-between text-xs mb-1">
        {data.map((item, i) => (
          <span key={i} className={`${item.text} font-medium`}>
            {item.label}
          </span>
        ))}
      </div>

      {/* MAIN BLOCK */}
      <div className="flex w-full h-[250px]">
        {data.map((item, i) => (
          <div
            key={i}
            className={`relative ${item.bg}`}
            style={{ width: item.width }}
          >
            {/* bottom color strip */}
            <div className={`absolute bottom-0 left-0 w-full h-3 ${item.bar}`} />
          </div>
        ))}
      </div>

      {/* VALUES */}
      <div className="flex justify-between text-sm mt-2 px-1 text-gray-600">
        {data.map((item, i) => (
          <span key={i}>{item.value}</span>
        ))}
      </div>

      {/* BOTTOM TOTAL */}
      <div className="mt-auto pt-4">
        <h1 className="text-4xl font-bold text-accent">
          4.15
          <span className="text-sm font-medium ml-2">
            PB In Use
          </span>
        </h1>
      </div>

    </div>
  )
}