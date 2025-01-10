"use client"
import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import useActiveSection from "@/hooks/useActiveSection";
import { NavigationItem } from "./types";
import { Button } from "../ui/button";

type NavbarClientProps = {
  navigationData?: NavigationItem[];
};

export default function NavbarClient({ navigationData }: NavbarClientProps) {
  const sectionIds = navigationData
    ?.filter((item) => item.type === "link")
    .map((item) => item.url.split("#")[1]) ?? [];
  const activeSection = useActiveSection(sectionIds); // Use the custom hook

  return (
    <>
      {navigationData?.map((item, index) => {
        if (item.type === "button") {
          // Render buttons
          return (
            <NavigationMenuItem key={index}>
              <Button asChild className={`font-bold ${item.className ?? ""} hover:opacity-80 focus:opacity-90`}><Link href={item.url}>{item.label}</Link></Button>
            </NavigationMenuItem>
          );
        }

        // Render links
        const section = item.url.split("#")[1];
        const isActive = section === activeSection;

        return (
          <NavigationMenuItem key={index}>
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent text-white border-b-2 ${
                  isActive ? "border-red-600" : "border-transparent"
                } rounded-none hover:border-red-600 hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white py-0 px-0 text-xl font-bold`}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        );
      })}
    </>
  );
}
