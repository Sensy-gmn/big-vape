"use client"; // Add this line at the top

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { CircleUser, MenuIcon } from "lucide-react";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardNavigation from "../../components/dashboard/DashboardNavigation";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { getUser } = getKindeServerSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const user = await getUser();
            if (!user || user.email !== "alexandre26goumain@gmail.com") {
                redirect("/");
            } else {
                setUser(user as any);
            }
        }
        fetchUser();
    }, [getUser]);

    if (!user) {
        return null; // Ou un indicateur de chargement
    }

    return (
        <html lang="fr">
            <body className={inter.className}>
                <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 bg-white border-b shadow-sm">
                        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-6">
                            <DashboardNavigation />
                        </nav>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="shrink-0 md:hidden"
                                >
                                    <MenuIcon className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={"left"}>
                                <nav className="flex flex-col gap-5 p-4 text-lg font-medium mt-4">
                                    <DashboardNavigation />
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <div className="flex items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <CircleUser className="w-6 h-6" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        Mon compte
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <LogoutLink>Se déconnecter</LogoutLink>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                    <main className="my-8">{children}</main>
                </div>
            </body>
        </html>
    );
}
