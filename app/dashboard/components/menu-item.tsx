"use client";

import { useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { DrawerContext } from "@/components/ui/drawer";

import {cn} from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={cn(
          "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
          {
            "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground": isActive
          }
        )}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}