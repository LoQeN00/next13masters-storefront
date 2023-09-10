import React from "react";
import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";


type RouteItem = {
  name: string;
  path: Route;
  exact: boolean;
};

export const Navbar = () => {
  const routes: RouteItem[] = [
    {
      name: "Home",
      path: "/",
      exact: true,
    },
    {
      name: "All",
      path: "/products",
      exact: false,
    },
  ]

  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex space-x-4">
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <ActiveLink activeClassName="underline" href={route.path} exact={route?.exact}>
                {route.name}
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
