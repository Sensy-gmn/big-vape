"use client"; // Add this line

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Importation du hook usePathname
import Navigation from "./components/storeFront/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Utilisation du hook usePathname pour obtenir la route actuelle

  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="sticky top-0 flex h-16 items-center justify-between gap-4 bg-white border-b shadow-sm">
            {pathname.startsWith("/dashboard") || <Navigation />}{" "}
            {/* Affichage conditionnel de la barre de navigation */}
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
