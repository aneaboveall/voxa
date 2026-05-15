export function GridBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-bg radial-fade animate-grid" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[600px] bg-electric/20 blur-[120px] rounded-full opacity-40" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[400px] bg-electric-glow/15 blur-[120px] rounded-full opacity-30" />
    </div>
  );
}
