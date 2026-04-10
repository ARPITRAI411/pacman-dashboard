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

export function DetailedComplianceContent() {
  const data = [
    { label: "SECURITY", value: 28, color: "#ff2f92" },
    { label: "TAGGING", value: 50, color: "#ff1f8a" },
    { label: "CERTIFICATES", value: 65, color: "#ff0f82" },
    { label: "PATCHING", value: 75, color: "#e60073" },
    { label: "SOX", value: 60, color: "#cc0066" },
    { label: "CLOUD OP", value: 25, color: "#99004d" },
  ];

  const radiusStart = 90;
  const gap = 14;

  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

 const describeArc = (r, value) => {
  const startAngle = -90;
  const endAngle = startAngle + (value / 100) * 180;

  const start = polarToCartesian(180, 150, r, startAngle);
  const end = polarToCartesian(180, 150, r, endAngle);

  return `
    M ${start.x} ${start.y}
    A ${r} ${r} 0 0 1 ${end.x} ${end.y}
  `;
};

  return (
    <div className="p-8 rounded-xl w-fullt ">
      
  
    

<div className="flex items-center justify-between px-4">

  {/* LEFT TEXT */}
  <div className="w-[45%]">
    
    {/* TOP TEXT */}
    <div className="flex items-end gap-2 mb-3">
      <span className="text-pink-600 text-sm">All Apps</span>
      <h1 className="text-[34px] font-bold text-pink-600 leading-none">
        99.82%
      </h1>
    </div>

    {/* LIST */}
    <div className="space-y-2 text-sm">
      {data.map((item) => (
        <div key={item.label} className="flex justify-between w-[160px]">
          <span className="text-gray-800">{item.label}</span>
          <span className="text-gray-800">{item.value}%</span>
        </div>
      ))}
    </div>
  </div>

  {/* RIGHT HALF DONUT */}
  <div className="w-[55%] flex justify-center">
    <svg width="320" height="260" viewBox="0 0 320 260">

      {data.map((item, i) => {
        const r = 110 - i * 14;

        return (
          <g key={i}>
            {/* background */}
            <path
              d={describeArc(r, 100)}
              stroke="#eeeeee"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />

            {/* value */}
            <path
              d={describeArc(r, item.value)}
              stroke={item.color}
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        );
      })}

    </svg>
  </div>
</div>

      {/* BOTTOM */}
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
  );
}