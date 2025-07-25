// All constants for the Hero page
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import {
  IconBook,
  IconSchool,
} from "@tabler/icons-react";
export const links = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <IconBrandGithub className="h-4 w-4" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: <IconBrandX className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <IconBrandLinkedin className="h-4 w-4" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: <IconBrandInstagram className="h-4 w-4" />,
  },
];
export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Education",
    link: "/education",
    icon: <IconSchool className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const colors = ["#06b6d4", "#3b82f6", "#6366f1"];



  export const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;


