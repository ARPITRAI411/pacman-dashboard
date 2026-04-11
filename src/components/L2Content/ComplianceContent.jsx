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
  const radiusBase = 120
  const strokeWidth = 14
  const gap = 6

  return (
    <div className=" bg-white">
      
      {/* TOP SECTION */}
      <div className="flex items-center gap-4">
        
        {/* LEFT */}
        <div className="ml-15">
          <div className="flex items-center gap-2">
            <span className="text-pink-500 text-sm">All Apps</span>
            <span className="text-3xl font-bold text-pink-600">
              99.82%
            </span>
          </div>

          <div className="mt-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex justify-between w-[180px] text-sm"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="text-black font-medium">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT RADIAL */}
        <div className=" relative -ml-6">
      <svg width="320" height="320" viewBox="0 0 320 320">
  {data.map((_, i) => {
    const r = radiusBase - i * (strokeWidth + gap)
    const circumference = 2 * Math.PI * r
    const half = circumference / 2

    return (
      <circle
        key={`bg-${i}`}
        cx="160"
        cy="160"
        r={r}
        fill="none"
        stroke="#eee"
        strokeWidth={strokeWidth}
        strokeDasharray={`${half} ${circumference}`}
        strokeDashoffset={0}
        transform="rotate(-90 160 160)"  // 🔥 important
      />
    )
  })}

  {data.map((item, i) => {
    const r = radiusBase - i * (strokeWidth + gap)
    const circumference = 2 * Math.PI * r
    const half = circumference / 2

    const progress = half * ( 1- item.value / 100)

    return (
      <circle
        key={i}
        cx="160"
        cy="160"
        r={r}
        fill="none"
        stroke={colors[i]}
        strokeWidth={strokeWidth}
        strokeLinecap="butt" // 🔥 important (no rounded ends)
        strokeDasharray={`${half} ${circumference}`}
        strokeDashoffset={progress}
        transform="rotate(-90 160 160)" 
      />
    )
  })}
</svg>
        </div>
      </div>

  
      <div className="flex justify-around mt-8 text-center">
        <div>
          <h1 className="text-2xl font-bold text-pink-600">200,000</h1>
          <p className="text-gray-600 text-sm">Scanned</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-pink-600">25</h1>
          <p className="text-gray-600 text-sm">Issues Found</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-pink-600">0.001%</h1>
          <p className="text-gray-600 text-sm">Items with issues</p>
        </div>
      </div>
    </div>
  )
}