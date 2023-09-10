"use client";

import React from 'react'
import { useRouter } from "next/navigation";

export const BackButton = () => {

    const router = useRouter();

    const handleGoBack = () => router.back();
  return (
    <button onClick={handleGoBack} className="text-3xl">&#8592;</button>
  )
}