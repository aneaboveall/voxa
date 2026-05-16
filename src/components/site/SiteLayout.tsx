import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground noise overflow-x-hidden">
      <Navbar />
      <main key={pathname} className="flex-1 pt-16 animate-in fade-in duration-500">
        {children}
      </main>
      <Footer />
    </div>
  );
}
