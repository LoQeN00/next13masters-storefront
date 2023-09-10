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
  partiallyActive?: boolean;
};

export const ActiveLink = <T extends string>({
  href,
  children,
  activeClassName,
  className = '',
  partiallyActive,
}: Props<T>) => {
  const pathname = usePathname();


  const isActive = partiallyActive ? pathname.startsWith(href) : pathname === href;

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
