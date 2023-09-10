import React from "react";
import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type RouteItem = {
  name: string;
  path: string;
  partiallyActive: boolean;
};

export const Navbar = () => {
  const routes: RouteItem[] = [
    {
      name: "Home",
      path: "/",
      partiallyActive: false
    },
    {
      name: "All",
      path: "/products",
      partiallyActive: true
    },
  ]

  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex space-x-4">
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <ActiveLink activeClassName="underline" href={route.path as Route} partiallyActive={route?.partiallyActive}>
                {route.name}
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
