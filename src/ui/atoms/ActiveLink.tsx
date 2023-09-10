"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import type { Route } from "next";

import { usePathname } from "next/navigation";

interface Props<T extends string> {
  href: Route<T>;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
  exact?: boolean;
};

export const ActiveLink = <T extends string>({
  href,
  children,
  activeClassName,
  className = '',
  exact,
}: Props<T>) => {
  const pathname = usePathname();


  const isActive = exact ? pathname === href : pathname.startsWith(href) ;

  const classes = clsx(
    `text-blue-400 hover:text-blue-600`,
    isActive && activeClassName,
    className,
  );

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
};
