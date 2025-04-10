import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo & Search */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center text-pink-500 font-bold text-xl">
          {/* <img
            src="/logo.png" // Bạn đổi thành đường dẫn icon của bạn
            alt="Chefify Logo"
            className="h-8 w-8 mr-1"
          /> */}
          Chefify
        </div>

        {/* Search Bar */}
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full text-gray-500 w-[300px]">
          <Search size={16} className="mr-2 shrink-0" />
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="bg-transparent outline-none text-sm text-gray-700 w-full"
          />
        </div>
      </div>

      {/* Nav & Buttons */}
      <div className="flex items-center space-x-6">
        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-sm font-medium">
            Login
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
