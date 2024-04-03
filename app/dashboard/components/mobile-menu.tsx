
import { MenuIcon } from "lucide-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import MenuTitle from "./menu-title";
import MainMenu from "./main-menu";

const MobileMenu = ({ isOpen, onOpenChange }: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
    <MenuTitle />
    <Drawer
      direction="right"
      open={isOpen}
      onClose={() => onOpenChange(false)}
      onOpenChange={onOpenChange}
    >
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <MainMenu />
      </DrawerContent>
    </Drawer>
  </div>
);

export default MobileMenu;