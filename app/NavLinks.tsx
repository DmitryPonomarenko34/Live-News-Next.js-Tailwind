'use client'

import React from "react";
import { usePathname } from 'next/navigation';
import { categories } from "../constants";
import NavLink from "./NavLink";

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  }
  

  return (
    <nav className="mx-auto border-b max-w-6xl overflow-hidden">
      <ul className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10">
        {categories.map((category) => (
          <li key={category}>
            <NavLink category={category} isActive={isActive(category)}/>
          </li>
        ))}
      </ul>
    </nav>
  )
}