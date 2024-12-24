import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <>
      <Separator className="dark:bg-slate-800" />
      <footer className="w-full flex justify-center py-6">
        <div className="w-11/12 flex justify-between items-center">
          <span className="tracking-wide sm:text-sm text-xs text-gray-500 dark:text-slate-400">
            &copy; 2024 FormFlow. All rights reserved.
          </span>

          <span className="tracking-wide sm:inline-block sm:text-sm hidden text-gray-500 dark:text-slate-400">
            Built with Next.js, Tailwind CSS, and ShadCN UI.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
