"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <Container>
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl lg:text-2xl font-medium tracking-tight hover:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
          >
            Interior Designer
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8 lg:gap-10" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href === "/work" && pathname.startsWith("/work/"));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-light tracking-wide transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Available badge */}
          <div className="hidden md:flex items-center">
            <Badge variant="gold">Available for hire</Badge>
          </div>
        </div>
      </Container>
    </header>
  );
}
