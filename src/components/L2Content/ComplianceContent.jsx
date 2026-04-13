import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"


export function ComplianceContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center ">
        <p className="mt-2 text-gray-600">
          <span className="font-bold text-black">58</span> Rules |
        </p>
        <h1 className="text-2xl font-bold text-accent">99.82%</h1>
        <p className="text-xs text-accent">Compliance</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[40%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">99.82%</h1>
        <p className="text-sm text-accent">Compliance All Apps</p>
      </div>

      <p className="mt-2 text-gray-600">
        <span className="font-bold text-black">58</span> Rules
      </p>

      <div className="flex justify-around mt-6 text-sm">
        <div>
          <p className="text-accent font-bold">98.4%</p>
          <p className="text-gray-500">TMNG</p>
        </div>
        <div>
          <p className="text-accent font-bold">98.1%</p>
          <p className="text-gray-500">REBL</p>
        </div>
        <div>
          <p className="text-accent font-bold">96.7%</p>
          <p className="text-gray-500">SOCL</p>
        </div>
      </div>
    </div>
  )
}


const data = [
  { name: "SECURITY", value: 28 },
  { name: "TAGGING", value: 50 },
  { name: "CERTIFICATES", value: 65 },
  { name: "PATCHING", value: 75 },
  { name: "SOX", value: 60 },
  { name: "CLOUD OP", value: 25 },
]

const colors = [
  "#ff4fa3",
  "#ff2f8f",
  "#ff0f7b",
  "#e60073",
  "#c7005f",
  "#99004d",
]

export function DetailedComplianceContent() {
  const radiusBase = 110
  const strokeWidth = 12
  const gap = 4

  return (
    <div className="bg-white px-4  pb-4 ml-10">
      
      {/* TOP */}
      <div className="flex items-end justify-center">

        {/* LEFT TEXT */}
        <div className="text-right ml-10 ">
          <p className="text-xs text-[#e10098]">All Apps</p>

          <h2 className="leading-none text-[#e10098]">
            <span className="text-xl font-bold">99.82</span>
            <span className="text-lg">%</span>
          </h2>

          <div className="space-y-1 text-[10px] text-gray-700 mt-2">
            {data.map((item, i) => (
              <div key={i} className="flex justify-end gap-2">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT GRAPH */}
        <div className="relative h-[300px] w-[300px] overflow-hidden">
          <svg viewBox="-20 0 320 320" width="100%" height="100%">
            
            {/* BACKGROUND */}
            {data.map((_, i) => {
              const r = radiusBase - i * (strokeWidth + gap)
              const circumference = 2 * Math.PI * r
              const half = circumference / 2

              return (
                <circle
                  key={`bg-${i}`}
                  cx="0"
                  cy="160"
                  r={r}
                  fill="none"
                  stroke={colors[i]}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${half} ${circumference}`}
                  transform="rotate(-90 0 160)"
                />
              )
            })}

            {/* PROGRESS */}
            {data.map((item, i) => {
              const r = radiusBase - i * (strokeWidth + gap)
              const circumference = 2 * Math.PI * r
              const half = circumference / 2

              const progress = half * (1 - item.value / 100)

              return (
                <circle
                  key={i}
                  cx="0"
                  cy="160"
                  r={r}
                  fill="none"
                   stroke="#eeeeee"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${half} ${circumference}`}
                  strokeDashoffset={progress}
                  transform="rotate(-90 0 160)"
                />
              )
            })}
          </svg>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-6 grid grid-cols-3 relative right-10 text-center">
        <div>
          <h3 className="text-sm font-bold text-[#e10098]">200,000</h3>
          <p className="text-xs text-gray-500">Scanned</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#e10098]">25</h3>
          <p className="text-xs text-gray-500">Issues Found</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#e10098]">
            0.001<span>%</span>
          </h3>
          <p className="text-xs text-gray-500">Items with issues</p>
        </div>
      </div>
    </div>
  )
}