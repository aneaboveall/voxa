import { Link } from "react-router-dom";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/product", label: "Overview" },
      { to: "/use-cases", label: "Use Cases" },
      { to: "/waitlist", label: "Waitlist" },
    ],
  },
  {
    title: "Developers",
    links: [
      { to: "/developers", label: "Documentation" },
      { to: "/developers", label: "SDKs" },
      { to: "/developers", label: "API Reference" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/", label: "About" },
      { to: "/waitlist", label: "Contact" },
      { to: "/", label: "Privacy" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-electric to-electric-glow grid place-items-center">
              <div className="h-2 w-2 rounded-sm bg-background" />
            </div>
            <span className="font-semibold tracking-tight">RelayOS</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            The runtime layer for real-time AI participation across meetings, calls, and voice environments.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="h-9 w-9 grid place-items-center rounded-md glass hover:border-white/15 transition-colors text-muted-foreground hover:text-foreground" aria-label="X">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18.244 2H21l-6.55 7.49L22 22h-6.797l-4.74-6.2L4.8 22H2.04l7.02-8.02L2 2h6.94l4.28 5.66L18.244 2Zm-1.19 18h1.88L7.04 4H5.05l12.005 16Z"/></svg>
            </a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-md glass hover:border-white/15 transition-colors text-muted-foreground hover:text-foreground" aria-label="GitHub">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 .5C5.73.5.79 5.44.79 11.71c0 4.94 3.2 9.13 7.64 10.61.56.1.77-.24.77-.54v-1.9c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.97 0 0 .94-.3 3.08 1.14.9-.25 1.86-.37 2.82-.38.96.01 1.92.13 2.82.38 2.14-1.44 3.08-1.14 3.08-1.14.61 1.55.23 2.69.11 2.97.72.78 1.16 1.78 1.16 3 0 4.3-2.61 5.25-5.1 5.53.4.34.76 1.02.76 2.06v3.05c0 .3.2.65.78.54 4.43-1.48 7.63-5.67 7.63-10.61C23.21 5.44 18.27.5 12 .5Z"/></svg>
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">{c.title}</div>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} RelayOS, Inc. All rights reserved.</div>
          <div>Conversational infrastructure for autonomous agents.</div>
        </div>
      </div>
    </footer>
  );
}
