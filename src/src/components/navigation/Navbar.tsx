import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavbarClient from "./NavbarClient";
import { NavigationItem } from "./types";

type NavBarProps = {
  navigationData?: NavigationItem[];
};

export default function Navbar({ navigationData }: NavBarProps) {
  return (
    <div className="w-full bg-black py-3 fixed top-0 left-0 px-4">
      <NavigationMenu className="w-full max-w-full flex justify-between items-center">
        <div className="flex-grow flex justify-center">
          <NavigationMenuList className="flex space-x-6">
            <NavbarClient
              navigationData={navigationData?.filter((item) => item.type === "link")}
            />
          </NavigationMenuList>
        </div>
        <div className="ml-auto">
          <NavigationMenuList className="flex space-x-4">
            <NavbarClient
              navigationData={navigationData?.filter((item) => item.type === "button")}
            />
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}
