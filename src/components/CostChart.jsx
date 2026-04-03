import {

  ResponsiveContainer,

} from 'recharts'





export function CostChart() {
  return (
    <div className="h-55 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {/* <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e8" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
          <YAxis
            yAxisId="left"
            tickFormatter={formatK}
            domain={[0, 1_000_000]}
            tick={{ fontSize: 10, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            width={48}
          /> */}
          {/* <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 0.5]}
            tick={{ fontSize: 10, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            width={36}
          /> */}
          {/* <Legend
            wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
            formatter={(value) => <span className="text-gray-600">{value}</span>}
          /> */}
          {/* <Bar yAxisId="left" dataKey="actual" name="Actual Cost" fill="#e91e63" radius={[2, 2, 0, 0]} barSize={14} />
          <Bar yAxisId="left" dataKey="projected" name="Projected Cost" fill="#d1d5db" radius={[2, 2, 0, 0]} barSize={14} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="actualRR"
            name="Actual Run Rate"
            stroke="#e91e63"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="projectedRR"
            name="Projected Run Rate"
            stroke="#9ca3af"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </ComposedChart>*/}
      </ResponsiveContainer> 
    </div>
  )
}
