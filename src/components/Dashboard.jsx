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
import { Gauge } from './Gauge'
import { PacManLogo } from './PacManLogo'
import Pacman from '../assets/pacman_bg.jpg'

function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-lg bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 ${className}`}
    >
      {children}
    </div>
  )
}

function CardTitle({ icon, children }) {
  const Icon = icon
  return (
    <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <span className="text-sm font-bold tracking-wide text-gray-800">{children}</span>
    </div>
  )
}

export function Dashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat font-sans text-gray-900"
style={{
  backgroundImage: `linear-gradient(rgba(18,18,22,0.55), rgba(18,18,22,0.65)), url(${Pacman})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
    >
      {/* Top nav */}
      <header className="relative flex h-14 items-center justify-between bg-[#1a1a1a]/90 px-6 text-white backdrop-blur-md">

  {/* LEFT MENU */}
  <button className="rounded p-2 hover:bg-white/10">
    <Menu className="h-6 w-6" />
  </button>

  {/* CENTER LOGO */}
  {/* <div className="absolute left-1/2 -translate-x-1/2">
    <PacManLogo />
  </div> */}

  {/* RIGHT ICONS */}
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

      {/* Sub-header */}
 <div className="w-7xl mt-8 ml-30 flex h-12 items-center justify-between  bg-white px-4 shadow-md">

  {/* LEFT */}
  <div className="flex items-center gap-2">
    <Filter className="h-5 w-5 text-[#E91E63]" />
    <span className="text-sm font-bold text-[#1a1a1a]">
      ALL APPLICATIONS
    </span>
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-6 text-sm">

    {/* STATUS */}
    <div className="flex items-center gap-3 border-l border-gray-300 pl-6">
      <span className="text-gray-600 font-medium">
        APPLICATION STATUS :
      </span>

      <span className="text-[#E91E63] font-bold">43 PRODUCTION</span>
      <span className="text-[#E91E63] font-bold">7 BUILD</span>
      <span className="text-[#E91E63] font-bold">5 INTAKE</span>
    </div>

    {/* SECURITY */}
    <div className="flex items-center gap-2 bg-[#2e2e2e] px-4 py-4 text-xs font-bold w-30 ml-10 text-white">
      SECURITY
      <span className="h-2 w-2 rounded-full bg-[#8BC34A] shadow-[0_0_6px_#8BC34A]" />
    </div>

  </div>
</div>

      {/* Main grid */}
      <main className="mx-auto max-w-6xl px-4 py-6 pb-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Cost — spans 2 rows on md+ */}
          <Card className="md:row-span-2">
            <CardTitle icon={DollarSign}>COST</CardTitle>
            <CostChart />
           
          </Card>

          <Card>
            <CardTitle icon={Cloud}>INVENTORY</CardTitle>
           
           
          </Card>

          <Card className='h-50'>
            <CardTitle icon={Check}>COMPLIANCE</CardTitle>
           
          </Card>

          <Card>
            <CardTitle icon={PieChart}>UTILIZATION</CardTitle>
           
          </Card>

          <Card className='h-50'>
            <CardTitle icon={Database}>STORAGE</CardTitle>
           
          </Card>
        </div>

        {/* Monitoring bar */}
        <Card className="mt-4  h-50 flex flex-wrap items-center justify-between gap-4 py-4">
        
        </Card>
      </main>
    </div>
  )
}
