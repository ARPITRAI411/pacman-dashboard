import { Menu, Bell } from "lucide-react"
import logo from "../assets/logo_pacman.svg"

export function Header() {
  return (   // ✅ RETURN ADDED
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
          className="h-6 object-contain"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <button className="relative rounded p-2 hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
          <span className="text-sm font-bold">👤</span>
        </div>
      </div>

    </header>
  )
}