// All constants for the Hero page
import { IconHome, IconMessage, IconBook, IconCertificate, IconBolt } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import {
  
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
    title: "Home",
    href: "/hero",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: "Skills",
    href: "/skills",
    icon: <IconBolt className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: "Certifications",
    href: "/certifications",
    icon: <IconCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

export const code = `const KunalRai = () => {
  const [skills] = React.useState([
    "React", "Node.js", "Next.js", 
    "TypeScript", "MongoDB", "PostgreSQL"
  ]);
 
  return (
    <div className="p-3 border rounded">
      <h3 className="font-bold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-1">
        {skills.map(skill => (
          <span key={skill} className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};`;


