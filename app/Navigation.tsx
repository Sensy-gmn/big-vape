"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Produits",
    href: "/products",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Panier",
    href: "/cart",
  },
  {
    name: "Mon compte",
    href: "/account",
  },
];

export default function DashboardNavigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            pathname === link.href
              ? "text-black"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          document.documentElement.classList.toggle("dark");
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        }}
      />
    </>
  );
}
