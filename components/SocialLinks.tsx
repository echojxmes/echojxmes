"use client";

import { ArrowRight } from "lucide-react";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/echojxmes",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Discord",
    href: "#",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-4">

      {links.map((link) => (

        <a
          key={link.title}
          href={link.href}
          className="group flex items-center justify-between rounded border border-zinc-800 bg-zinc-950/70 px-6 py-5 transition-all duration-300 hover:border-blue-500 hover:bg-zinc-900"
        >

          <span>{link.title}</span>

          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

        </a>

      ))}

    </div>
  );
}