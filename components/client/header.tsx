"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((theme) => !theme);
  };

  return (
    <>
      <header className="w-full flex justify-center py-4">
        <nav className="w-11/12 flex justify-between items-center">
          <h3 className="text-2xl font-bold tracking-wide text-black dark:text-white">
            FormFlow
          </h3>
          <div className="theme-container flex items-center space-x-3">
            <Switch
              checked={darkMode}
              onCheckedChange={handleToggle}
              id="theme"
            />
            <div className="w-7 h-7 border border-gray-400 dark:border-none dark:bg-[#334155] rounded-lg flex justify-center items-center">
              {darkMode ? (
                <IoSunny className="text-zinc-300" size="1.1rem" />
              ) : (
                <IoMoon className="text-gray-500" size="1.1rem" />
              )}
            </div>
          </div>
        </nav>
      </header>
      <Separator className="dark:bg-slate-800" />
    </>
  );
};

export default Header;
