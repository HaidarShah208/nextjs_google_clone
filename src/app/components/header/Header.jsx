import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

function Header() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex items-center space-x-4">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://mail.google.com"} className="hover:underline">
          images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
        <button className="bg-blue-600 text-white py-2 px-6 font-medium hover:shadow-md hover:brightness-105 transition-shadow rounded-md">Sign in</button>{" "}
      </div>
    </header>
  );
}

export default Header;
