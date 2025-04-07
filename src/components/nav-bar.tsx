"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import Image from 'next/image'
import bglessTextlessLogo from './../components/images/bgless-textless-logo.png'

export function NavBar() {
    return (
        <div className="fixed top-0 w-screen flex flex-row justify-center z-10 bg-background dark:bg-accent shadow-md p-2">
            <div className="flex flex-row items-center fixed top-2 left-4">
                <Image
                    src={bglessTextlessLogo}
                    alt="Picture of the author"
                    className="h-10 w-10"
                />
                <p className="text-xl font-sans"> optionsHQ</p>
            </div>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Options Performance
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/stocks" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Stock Finder
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/options" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Options Finder
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/watchlist" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Watchlist
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>



            </NavigationMenu>
            <div className="flex flex-row items-center fixed top-2 right-4">
                <DarkModeToggle />
            </div>
        </div>
    )
}
