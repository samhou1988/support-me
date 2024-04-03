import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";

import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  { href: "/dashboard", label: "My dashboard" },
  { href: "/dashboard/teams", label: "Teams" },
  { href: "/dashboard/employees", label: "Employees" },
  { href: "/dashboard/account", label: "Account" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}