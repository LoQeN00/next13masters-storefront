import React from "react";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
};

export const ProductCoverImage = ({ src, alt }: Props) => {
  return (
    <div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
      <Image
        width={320}
        height={320}
        alt={alt}
        src={src}
        className="h-full w-full object-cover object-center p-4 transition-transform  hover:scale-105"
      />
    </div>
  );
};