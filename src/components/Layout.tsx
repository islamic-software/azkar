import React, { ReactNode } from "react";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div dir="rtl" className="font-kufi">
      <div className="max-w-screen-md mx-auto my-20">{children}</div>
    </div>
  );
};

export default Layout;
