import React, { ReactNode } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div dir="rtl" className="font-kufi">
      <ThemeSwitcher />
      <div className="max-w-screen-md mx-auto my-10 px-4">{children}</div>
    </div>
  );
};

export default Layout;
