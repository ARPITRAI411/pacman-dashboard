import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export function ComplianceContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
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

export function DetailedComplianceContent() {
  const data = [
    { name: "SECURITY", value: 28 },
    { name: "TAGGING", value: 50 },
    { name: "CERTIFICATES", value: 65 },
    { name: "PATCHING", value: 75 },
    { name: "SOX", value: 60 },
    { name: "CLOUD OP", value: 25 },
  ]

  const colors = [
    "#ff0a78",
    "#ff0a78",
    "#ff0a78",
    "#d6005f",
    "#b0004c",
    "#8a003c",
  ]

  return (
    <div className="flex flex-col h-full px-6 pt-4">

      {/* MAIN */}
      <div className="flex items-center justify-center">

        {/* LEFT TEXT */}
        <div className="text-right mr-6">
          <p className="text-accent text-sm">All Apps</p>
          <h1 className="text-3xl font-bold text-accent">
            99.82<span className="text-lg">%</span>
          </h1>

          <div className="mt-4 space-y-1 text-xs text-gray-700">
            {data.map((item, i) => (
              <div key={i} className="flex justify-end gap-3">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CHART */}
        <div className="w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                startAngle={180}
                endAngle={0}
                innerRadius={40}
                outerRadius={90}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className="flex justify-between mt-auto pt-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-accent">200,000</h1>
          <p className="text-sm text-gray-500">Scanned</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-accent">25</h1>
          <p className="text-sm text-gray-500">Issues Found</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-accent">
            0.001<span className="text-sm">%</span>
          </h1>
          <p className="text-sm text-gray-500">Items with issues</p>
        </div>
      </div>

    </div>
  )
}