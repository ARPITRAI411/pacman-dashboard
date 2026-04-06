import React, { useState, cloneElement } from "react"
import {
  Menu,
  Bell,
  Filter,
  DollarSign,
  Cloud,
  Check,
  PieChart,
  Database,
  Activity,
} from "lucide-react"
import Pacman from "../assets/pacman_bg.jpg"
import { motion } from "framer-motion"
import logo from '../assets/logo_pacman.svg'
import { MonitoringContent } from "./MonitoringContent"
import { InventoryContent } from "./InventoryContent"
import { UtilizationContent } from "./UtilizationContent"
import { CostContent } from "./CostContent"
import { ComplianceContent } from "./ComplianceContent"
import { StorageContent } from "./StorageContent"

/* ------------------ COMMON COMPONENTS ------------------ */

function CardTitle({ icon: Icon, children }) {
  return (
    <div className="mb-4 flex gap-2 items-center justify-center pb-3 pt-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#777777]">
        <Icon className="h-5 w-5" />
      </span>

      <span className="text-base font-semibold tracking-wide text-[#777777]">
        {children}
      </span>
    </div>
  )
}

/* ------------------ ANIMATED GRID ------------------ */

function AnimatedGrid() {
  const [active, setActive] = useState("COST")

  const columns = [
    [
      {
        title: "COST",
        icon: DollarSign,
        defaultContent: <CostContent />,
        activeContent: <div>Cost Detailed View</div>,
      },
      {
        title: "MONITORING",
        icon: Activity,
        defaultContent: <MonitoringContent />,
        activeContent: <div>Monitoring Detailed View</div>,
      },
    ],
    [
      {
        title: "INVENTORY",
        icon: Cloud,
        defaultContent: <InventoryContent />,
        activeContent: <div>Inventory Detailed View</div>,
      },
      {
        title: "UTILIZATION",
        icon: PieChart,
        defaultContent: <UtilizationContent />,
        activeContent: <div>Utilization Detailed View</div>,
      },
    ],
    [
      {
        title: "COMPLIANCE",
        icon: Check,
        defaultContent: <ComplianceContent />,
        activeContent: <div>Compliance Detailed View</div>,
      },
      {
        title: "STORAGE",
        icon: Database,
        defaultContent: <StorageContent />,
        activeContent: <div>Storage Detailed View</div>,
      },
    ],
  ]

  const getHeights = (col, title) => {
    const isActiveCol = col.some((c) => c.title === active)

    if (!isActiveCol) return "h-[260px]  "

    return active === title ? "h-[420px]" : "h-[100px]"
  }

  return (
    <div className="flex gap-2 w-full">
      {columns.map((col, colIndex) => (
        <motion.div
          key={colIndex}
          layout
          className={`flex flex-col gap-2 transition-all duration-300
            ${col.some((c) => c.title === active) ? "w-[48.5%]" : "w-[25%]"}
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
                onClick={() => setActive(title)}
                className={`cursor-pointer bg-white p-5 border border-gray-200 overflow-hidden 
                  ${getHeights(col, title)}
                `}
              >
                {isCompact ? (
                  // 🔥 COMPACT HEADER VIEW
                  <div className="flex items-center justify-between h-full px-2">
                    
                    {/* LEFT */}
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-[#777777]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-[#777777]">
                        {title}
                      </span>
                    </div>

                    {/* RIGHT */}
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
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat font-sans text-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(18,18,22,0.55), rgba(18,18,22,0.65)), url(${Pacman})`,
      }}
    >
      {/* HEADER */}
    <header className="relative flex h-14 items-center justify-between bg-[#1a1a1a]/40 px-6 text-white backdrop-blur-md">
  
  {/* LEFT */}
  <button className="rounded p-2 hover:bg-white/10">
    <Menu className="h-6 w-6" />
  </button>

  {/* CENTER LOGO */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <img
      src={logo}
      alt="Pacman Logo"
      className="h-8 object-contain"
    />
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-3">
    <button className="relative rounded p-2 hover:bg-white/10">
      <Bell className="h-5 w-5" />
      <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#E91E63]" />
    </button>

    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
      <span className="text-sm font-bold">👤</span>
    </div>
  </div>

</header>

      {/* SUB HEADER */}
      <div className="mt-16 ml-20 flex w-[89%] items-center justify-between pl-4 bg-white h-12">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-[#E91E63]" />
          <span className="text-sm font-bold text-[#1a1a1a]">
            ALL APPLICATIONS
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-3 border-l border-gray-300 pl-6">
            <span className="text-gray-600 font-medium">
              APPLICATION STATUS :
            </span>
            <span className="text-[#E91E63] font-bold">43 PRODUCTION</span>
            <span className="text-[#E91E63] font-bold">7 BUILD</span>
            <span className="text-[#E91E63] font-bold">5 INTAKE</span>
          </div>

          <div className="flex items-center gap-2 bg-[#2e2e2e] px-4 py-4 text-xs font-bold w-30 ml-10 text-white">
            SECURITY
            <span className="h-2 w-2 rounded-full bg-[#8BC34A]" />
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main className="mx-auto w-[90%] mt-4 px-1">
        <AnimatedGrid />
      </main>
    </div>
  )
}