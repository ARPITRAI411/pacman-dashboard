export function PacManLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
        <path
          fill="#e91e63"
          d="M 16 16 L 27.5 9.5 A 14 14 0 1 1 27.5 22.5 Z"
        />
      </svg>
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
    </div>
  )
}
