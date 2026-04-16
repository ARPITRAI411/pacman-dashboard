import React, { useState, cloneElement } from "react"
import {
  Filter,
  DollarSign,
  Cloud,
  Check,
  PieChart,
  Database,
  Activity,
} from "lucide-react"
import { motion ,AnimatePresence } from "framer-motion"
import { MonitoringContent,DetailedMonitoringContent } from "./L2Content/MonitoringContent"
import { InventoryContent ,DetailedInventoryContent } from "./L2Content/InventoryContent"
import { UtilizationContent,DetailedUtilizationContent } from "./L2Content/UtilizationContent"
import { CostContent,DetailedCostContent } from "./L2Content/CostContent"
import { ComplianceContent,DetailedComplianceContent} from "./L2Content/ComplianceContent"
import { StorageContent,DetailedStorageContent } from "./L2Content/StorageContent"
import {useNavigate} from 'react-router-dom'




/* ------------------ COMMON COMPONENTS ------------------ */

function CardTitle({ icon: Icon, children }) {
  return (
    <div className="mb-4 flex items-center  justify-center  pt-2">
      <span className="flex h-9 w-9 items-center justify-center font-bold  text-[#777777]">
        <Icon className="h-5 w-5" />
      </span>

      <span className=" font-bold tracking-wide text-[#777777]">
        {children}
      </span>
    </div>
  )
}

/* ------------------ ANIMATED GRID ------------------ */

function AnimatedGrid() {
  const [active, setActive] = useState("COST")
const navigate = useNavigate()
const routes = {
  COST: "/cost-details",
  MONITORING: "/monitoring-details",
  INVENTORY: "/inventory-details",
    UTILIZATION: "/utilization-details",
      COMPLIANCE: "/compliance-details",
      STORAGE: "/storage-details",
}
  const cards = [
  {
    title: "COST",
    icon: DollarSign,
    defaultContent: <CostContent />,
    activeContent: <DetailedCostContent />,
  },
  
  {
    title: "INVENTORY",
    icon: Cloud,
    defaultContent: <InventoryContent />,
    activeContent: <DetailedInventoryContent />,
  },

    {
    title: "COMPLIANCE",
    icon: Check,
    defaultContent: <ComplianceContent />,
    activeContent: <DetailedComplianceContent />,
  },
    {
    title: "MONITORING",
    icon: Activity,
    defaultContent: <MonitoringContent />,
    activeContent: <DetailedMonitoringContent />,
  },
  {
    title: "UTILIZATION",
    icon: PieChart,
    defaultContent: <UtilizationContent />,
    activeContent: <DetailedUtilizationContent />,
  },

  {
    title: "STORAGE",
    icon: Database,
    defaultContent: <StorageContent />,
    activeContent: <DetailedStorageContent />,
  },

  
]

const columnCount = 3

const columns = Array.from({ length: columnCount }, () => [])

cards.forEach((card, index) => {
  columns[index % columnCount].push(card)
})

  const getHeights = (col, title) => {
    const isActiveCol = col.some((c) => c.title === active)

    if (!isActiveCol) return "h-[280px]  "

    return active === title ? "h-[470px]" : "h-[90px]"
  }

  return (
    <div className="flex gap-3 w-full">
    {columns.map((col, colIndex) => (
      <motion.div
        key={colIndex}
        layout
        className={`flex flex-col gap-3 transition-all duration-300
          ${col.some((c) => c.title === active) ? "w-[50%]" : "w-[25%]"}
        `}
      >
        
        {col.map(({ title, icon, defaultContent, activeContent }) => {
          const isCompact =
            active !== title && col.some((c) => c.title === active)

          const Icon = icon

          return (
           <motion.div
  key={title}
  layout
  onClick={() => {
    if (active !== title) {
      setActive(title)
    } else if (routes[title]) {
      navigate(routes[title])
    }
  }}
  className={`cursor-pointer bg-white p-5 border border-gray-200 overflow-hidden 
    ${getHeights(col, title)}
  `}
>
              {isCompact ? (
                <div className="flex items-center justify-between h-full px-2">
                  <div className="flex items-center ">
                    <span className="flex h-8 w-8 items-center justify-center  text-[#777777]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold text-[#777777]">
                      {title}
                    </span>
                  </div>

                  {cloneElement(defaultContent, { compact: true })}
                </div>
              ) : (
                <>
                  <CardTitle icon={icon}>{title}</CardTitle>

                  {active === title
                    ? activeContent || defaultContent
                    : defaultContent}
                </>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    ))}
  </div>
  )
}

/* ------------------ MAIN DASHBOARD ------------------ */

export function Dashboard() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className="min-h-screen font-sans text-gray-900">
  

      {/* SUB HEADER */}
      <div className="mt-6 ml-20 flex w-[89%] items-center justify-between pl-4 bg-white h-12">
        <div className="flex items-center gap-2">
          <Filter
  onClick={() => setShowFilter(true)}
  className="h-5 w-5 text-accent fill-accent cursor-pointer"
/>
          <span className="text-[12px] font-bold text-[#1a1a1a]">
            ALL APPLICATIONS
          </span>
        </div>

        <div className="flex items-center text-[12px] gap-6 text-sm">
          <div className="flex items-center gap-4 border-l border-gray-300 pl-6">
            <span className=" font-semibold">
              APPLICATION STATUS :
            </span>
            <h1 className="text-accent font-bold"> 43 <span className="text-gray-500">PRODUCTION</span> </h1>
            <h1 className="text-accent font-bold"> 7 <span className="text-gray-500">BUILD</span> </h1>
              <h1 className="text-accent font-bold"> 5 <span className="text-gray-500">INTAKE</span> </h1>
          </div>

          <div className="flex items-center gap-2 bg-[#2e2e2e] px-4 py-4 text-xs font-bold w-30 ml-10 text-white">
            SECURITY
            <span className="h-2 w-2 rounded-full bg-[#8BC34A]" />
          </div>
        </div>
      </div>


  {showFilter && (
<AnimatePresence>
  {/* OVERLAY */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="fixed inset-0 bg-black/30 z-40"
    onClick={() => setShowFilter(false)}
  />

  {/* SIDEBAR */}
  <motion.div
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -60, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="fixed top-[144px] left-[80px] w-[300px] 
    bg-[#6b6b6b]/70 backdrop-blur-md z-50 p-5 text-white shadow-xl"
    onClick={(e) => e.stopPropagation()}
  >
    {/* SEARCH */}
    <div className="border border-gray-300 px-3 py-2 mb-6 flex items-center gap-2">
      <span className="text-gray-300 text-sm">🔍</span>
      <input
        placeholder="SEARCH"
        className="bg-transparent outline-none text-sm w-full placeholder-gray-300"
      />
    </div>

    {/* LIST */}
    <div className="space-y-3 text-sm">
      <p className="font-bold">All applications</p>

      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-4 h-4 flex items-center justify-center bg-white text-black text-xs">
            +
          </span>
          <span>App {i + 1}</span>
        </div>
      ))}
    </div>
  </motion.div>
</AnimatePresence>
  )}

  {/* MAIN */}
  <main className="mx-auto w-[90%] mt-4 px-1">
    <AnimatedGrid />
  </main>
</div>
  )
}