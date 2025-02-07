"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { name: "Dashboard", image: "/1stSidebar.png", link: "/dashboard" },
  { name: "Menu", image: "/2ndSidebar.png", link: "/menu" },
  { name: "Staff", image: "/3rdSidebar.png", link: "/staff" },
  { name: "Signin", image: "/1stSidebar.png", link: "/auth/signin" },
  { name: "Signup", image: "/1stSidebar.png", link: "/auth/signup" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col w-20 sm:w-64 transition-all duration-300 shadow-2xl">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center sm:justify-between h-14 border-b border-gray-700 px-4">
        <h1 className="text-base font-bold text-pink-400">COSYPOS</h1>
        <button className="sm:hidden">
          {/* Hamburger menu icon */}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 mt-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span
              className={`hidden sm:inline-block ${
                pathname === item.link
                  ? "text-pink-500 font-medium"
                  : "text-gray-300 hover:text-gray-100"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
