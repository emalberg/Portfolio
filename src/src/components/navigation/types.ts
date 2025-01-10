export type NavigationItem = {
    type: "link" | "button";
    label: string;
    url: string;
    className?: string;
  }