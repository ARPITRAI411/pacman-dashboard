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
} from 'lucide-react'
import { CostChart } from './CostChart'
import Pacman from '../assets/pacman_bg.jpg'
import { motion } from "framer-motion"
import { useState } from "react"

/* ------------------ COMMON COMPONENTS ------------------ */

function CardTitle({ icon: Icon, children }) {
  return (
    <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <span className="text-sm font-bold tracking-wide text-gray-800">
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
      { title: "COST", icon: DollarSign, content: <CostChart /> },
      { title: "MONITORING", icon: Activity },
    ],
    [
      { title: "INVENTORY", icon: Cloud },
      { title: "UTILIZATION", icon: PieChart },
    ],
    [
      { title: "COMPLIANCE", icon: Check },
      { title: "STORAGE", icon: Database },
    ],
  ]

  const isColumnActive = (col) =>
    col.some((card) => card.title === active)

  // 🔥 UPDATED HEIGHTS 
const getHeights = (col, title) => {
  const isActiveCol = col.some((c) => c.title === active)

  if (!isActiveCol) {
    return "h-[260px]" // normal both
  }

  return active === title
    ? "h-[420px]" // active card
    : "h-[100px]" // shrink sibling
}

  return (
    <div className="flex gap-1 w-full">

     {columns.map((col, colIndex) => {
  const activeCol = isColumnActive(col)

  return (
    <motion.div
      key={colIndex}
      layout
      className={`flex flex-col gap-1 transition-all duration-300
        ${activeCol ? "w-[38%]" : "w-[31%]"}
      `}
    >
      {col.map(({ title, icon, content }) => (
        <motion.div
          key={title}
          layout
          onClick={() => setActive(title)}
          className={`cursor-pointer bg-white p-5 border border-gray-200 overflow-hidden 
            ${getHeights(col, title)}
          `}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <CardTitle icon={icon}>{title}</CardTitle>

          {active === title && content}
        </motion.div>
      ))}
    </motion.div>
  )
})}
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
      <header className="relative flex h-14 items-center justify-between bg-[#1a1a1a]/90 px-6 text-white backdrop-blur-md">
        <button className="rounded p-2 hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </button>

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
      <div className="mt-15 ml-21 flex w-[89%] items-center justify-between pl-4  bg-white h-12">
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
            <span className="h-2 w-2 rounded-full bg-[#8BC34A] shadow-[0_0_6px_#8BC34A]" />
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