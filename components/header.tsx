"use client";
import { logout } from "@/app/actions/auth";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <Link href="/">
        <span className="text-xl font-bold">Your App Name</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <span className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-700">
            Login
          </span>
        </Link>
        <Link href="/signup">
          <span className="px-3 py-2 rounded-md text-sm font-medium text-blue-500 hover:text-blue-700 border border-blue-500">
            Signup
          </span>
        </Link>
        <button
          className="px-3 py-2 rounded-md text-sm font-medium text-red-500 hover:text-red-700 border border-red-500"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
