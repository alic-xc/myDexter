import MagicAIIcon from "../icons/MagicAIIcon";

interface nav {
  icon: React.ReactNode;
  name: string;
  link: string;
}

export const navs: nav[] = [
  { icon: <MagicAIIcon  />, name: "Dexter AI", link: "" },
  { icon: "", name: "Analytics", link: "" },
  { icon: "", name: "Blog Post", link: "" },
  { icon: "", name: "Sign In", link: "" },
];
