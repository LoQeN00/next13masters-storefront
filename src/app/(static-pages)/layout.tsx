import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="text-center max-w-md mx-auto">{children}</div>;
};

export default Layout;
