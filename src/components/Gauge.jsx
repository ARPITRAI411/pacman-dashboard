/** Semi-circular gauge with pink needle (0–100 maps to left to right of arc) */
export function Gauge({ label, value }) {
  const pct = Math.min(100, Math.max(0, value))
  const angle = 180 - (pct / 100) * 180
  const rad = (angle * Math.PI) / 180
  const cx = 50
  const cy = 52
  const r = 28
  const nx = cx + r * Math.cos(rad)
  const ny = cy - r * Math.sin(rad)

  return (
    <div className="flex flex-col items-center">
      <svg width="72" height="44" viewBox="0 0 100 56" className="overflow-visible">
        <path
          d="M 14 52 A 36 36 0 0 1 86 52"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 14 52 A 36 36 0 0 1 86 52"
          fill="none"
          stroke="#fce4ec"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * 113} 113`}
        />
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#e91e63" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3" fill="#e91e63" />
      </svg>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">{label}</span>
    </div>
  )
}
