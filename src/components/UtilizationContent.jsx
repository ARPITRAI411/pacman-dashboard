import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

export function UtilizationContent({ compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-accent">39%</h1>
        <p className="text-xs text-accent">Overall</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex w-[40%] justify-center gap-0.5 mx-auto mb-2">
        <h1 className="text-4xl font-bold text-accent">39%</h1>
        <p className="text-sm text-accent">Overall</p>
      </div>

      <div className="flex justify-around mt-8 text-sm">
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-accent rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">CPU</p>
        </div>
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-accent rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">I/O</p>
        </div>
        <div>
          <div className="w-10 h-10 border-4 border-gray-300 border-t-accent rounded-full mx-auto" />
          <p className="mt-2 text-gray-500">DISK</p>
        </div>
      </div>
    </div>
  )
}
export function DetailedUtilizationContent() {
  const data = [
    { name: "1", cpu: 10, io1: 120, io2: 150, disk1: 45, disk2: 25 },
    { name: "2", cpu: 8, io1: 150, io2: 130, disk1: 50, disk2: 20 },
    { name: "3", cpu: 11, io1: 130, io2: 160, disk1: 45, disk2: 30 },
    { name: "4", cpu: 9, io1: 160, io2: 120, disk1: 48, disk2: 22 },
    { name: "5", cpu: 10, io1: 140, io2: 150, disk1: 52, disk2: 28 },
    { name: "6", cpu: 12, io1: 170, io2: 130, disk1: 46, disk2: 24 },
    { name: "7", cpu: 9, io1: 130, io2: 160, disk1: 50, disk2: 30 },
    { name: "8", cpu: 11, io1: 160, io2: 140, disk1: 47, disk2: 22 },
    { name: "9", cpu: 10, io1: 150, io2: 170, disk1: 52, disk2: 28 },
  ]

  return (
    <div className="flex flex-col h-full px-6 pt-4 pb-4">

      {/* CPU */}
      <div className="flex items-start gap-3 h-[70px]">
        {/* Left Labels */}
        <div className="flex flex-col justify-between text-xs text-gray-400 h-full">
          <span>20%</span>
          <span>10%</span>
          <span>0%</span>
        </div>

        {/* Chart */}
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1">CPU</p>
          <ResponsiveContainer width="100%" height = {65}>
            <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <Line
                type="monotone"
                dataKey="cpu"
                stroke="#E91E63"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* IO */}
      <div className="flex items-start gap-3 h-[70px] mt-5">
        <div className="flex flex-col justify-between text-xs text-gray-400 h-full">
          <span>400 kb/s</span>
          <span>200 kb/s</span>
          <span>0 kb/s</span>
        </div>

        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1">I/O</p>
         <ResponsiveContainer width="100%" height = {65}>
            <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <Line
                type="monotone"
                dataKey="io1"
                stroke="#8BC34A"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="io2"
                stroke="#9C27B0"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DISK */}
      <div className="flex items-start gap-3 h-[70px] mt-5">
        <div className="flex flex-col justify-between text-xs text-gray-400 h-full">
          <span>100 MB</span>
          <span>50 MB</span>
          <span>0 MB</span>
        </div>

        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1">DISK</p>
           <ResponsiveContainer width="100%" height = {65}>
            <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <Line
                type="monotone"
                dataKey="disk1"
                stroke="#FF9800"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="disk2"
                stroke="#0288D1"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6">
        <h1 className="text-[30px] font-semibold text-[#E91E63] leading-none">
          39<span className="text-lg align-top">%</span>
          <span className="text-sm font-medium text-[#E91E63] ml-2">
            Overall
          </span>
        </h1>
      </div>

    </div>
  )
}