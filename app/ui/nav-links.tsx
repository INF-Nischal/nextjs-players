"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "NewPlayers", href: "/new" },
  { name: "Players", href: "/players" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "flex h-[36px] items-center mr-8 last-of-type:mr-0 justify-center rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
            {
              "bg-sky-100 text-blue-600": pathname === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
