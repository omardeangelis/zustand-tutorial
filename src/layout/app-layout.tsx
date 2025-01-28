import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, Outlet } from "react-router";

export const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen relative">
      <aside
        className={`fixed top-0 left-0 flex flex-col items-start justify-start h-screen bg-gray-900 p-4 transition-all duration-300 ${
          isOpen ? "w-[176px]" : "w-20"
        }`}
      >
        <Link to="/">{isOpen ? "Basic" : "B"}</Link>
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "close" : "-->"}
        </Button>
      </aside>
      <div
        className={`flex-1 overflow-y-auto w-full p-4 transition-all duration-300 ${
          isOpen ? "ml-[176px]" : "ml-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};
