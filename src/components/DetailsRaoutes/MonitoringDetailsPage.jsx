import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { SubHeader } from "../SubHeader"
import { useEffect, useState } from "react"
import { getMonitoringData } from "../../services/api"

/* ---------------- DOT ---------------- */
function Dot({ type = "green" }) {
  let color = "bg-[#70C530]"
  let ring = "border-[#70C530]"

  if (type === "red") {
    color = "bg-red-500"
    ring = "border-red-400"
  }

  if (type === "yellow") {
    color = "bg-yellow-400"
    ring = "border-yellow-300"
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className={`absolute w-10 h-10 rounded-full border ${ring} opacity-50`} />
      <div className={`absolute w-8 h-8 rounded-full border ${ring} opacity-50`} />
      <div className={`absolute w-6 h-6 rounded-full border ${ring} opacity-50`} />
      <div className={`w-5 h-5 rounded-full ${color}`} />
    </div>
  )
}

/* ---------------- DOT GRID ---------------- */
function DotGrid({ apiDots = [] }) {
  const total = 80

  return (
    <div className="grid grid-cols-10 gap-6 justify-items-center mt-6">
      {Array.from({ length: total }).map((_, i) => {
        let type = "green"
        const match = apiDots.find(d => d.index === i)
        if (match) type = match.type

        return <Dot key={i} type={type} />
      })}
    </div>
  )
}

/* ---------------- CARD ---------------- */
function MonitoringCard({ title, onClose, appData }) {
  return (
    <div className="bg-white p-6 shadow-md w-full relative">

      {/* CLOSE */}
      <button
        onClick={() => onClose(title)}
        className="absolute right-4 top-4 bg-gray-600 text-white rounded-full p-1"
      >
        <X size={14} />
      </button>

      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-[28px] font-semibold text-[#5f6b76] flex items-center gap-2">
          {title}
          {appData?.status === "LIVE" && (
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
              LIVE
            </span>
          )}
        </h1>

        <p className="text-gray-500 text-sm">All Apps</p>

        <p className="text-xs text-gray-500 text-right mt-[-20px]">
          Last Updated 10 minutes ago
        </p>
      </div>

      {/* DOT GRID */}
      <DotGrid apiDots={appData?.dots} />

      {/* FOOTER */}
      <div className="flex justify-between mt-8 text-center text-sm">
        <div>
          <p className="text-pink-600 font-bold text-lg">3.4M</p>
          <p className="text-gray-500 text-xs">REQUESTS</p>
        </div>

        <div>
          <p className="text-pink-600 font-bold text-lg">3412</p>
          <p className="text-gray-500 text-xs"># UNIQUE USERS</p>
        </div>

        <div>
          <p className="text-pink-600 font-bold text-lg">
            {appData?.network}
          </p>
          <p className="text-gray-500 text-xs">NETWORK BYTES</p>
        </div>

        <div>
          <p className="text-pink-600 font-bold text-lg">
            {appData?.latency}
          </p>
          <p className="text-gray-500 text-xs">CPU LATENCY</p>
        </div>
      </div>
    </div>
  )
}

/* ---------------- MAIN PAGE ---------------- */
export default function MonitoringDetailsPage() {
  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    getMonitoringData().then(res => {
      setData(res.data)
      setVisibleCards(res.data.apps.map(app => app.name))
    })
  }, [])

  const handleClose = (title) => {
    const updated = visibleCards.filter(item => item !== title)

    if (updated.length === 0) {
      navigate("/")
    } else {
      setVisibleCards(updated)
    }
  }

  return (
    <div className="mt-10">
      <SubHeader />

      <div className="flex h-full gap-3 w-[90%] mx-auto mt-4">
        {data?.apps
          .filter(app => visibleCards.includes(app.name))
          .map(app => (
            <MonitoringCard
              key={app.name}
              title={app.name}
              appData={app}
              onClose={handleClose}
            />
          ))}
      </div>
    </div>
  )
}