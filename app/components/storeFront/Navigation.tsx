"use client";

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
import { cn } from "@/lib/utils";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
    LoginLink,
    LogoutLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { CircleUser, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Navigation() {
    const pathname = usePathname();
    const { isAuthenticated } = useKindeBrowserClient();

    return (
        <>
            <nav className="hidden md:flex gap-4">
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
            </nav>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="shrink-0 md:hidden">
                        <MenuIcon className="w-6 h-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <nav className="flex flex-col gap-5 p-4 text-lg font-medium">
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
                    </nav>
                </SheetContent>
            </Sheet>

            <div className="flex left-0 md:mt-0" id="user-menu">
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
                        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        {isAuthenticated ? (
                            <>
                                <DropdownMenuItem asChild>
                                    <LogoutLink>Se déconnecter</LogoutLink>
                                </DropdownMenuItem>
                            </>
                        ) : (
                            <>
                                <DropdownMenuItem asChild>
                                    <LoginLink>Se connecter</LoginLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <RegisterLink>S&apos;inscrire</RegisterLink>
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
}
