import React from 'react';
import { ActiveLink } from '../atoms/ActiveLink';
import { getProductsList } from '@/api/products';

type Props = {
  pageNumber: string;
};

export const ProductsPaginator = async ({ pageNumber }: Props) => {
  const pages = await Promise.all(
    Array.from({ length: 5 }).map(async (_, i) => {
      const currentPageNumber = Number(pageNumber) + i - 2;

      if (currentPageNumber < 1) return null;

      const products = await getProductsList(20, (Number(currentPageNumber) - 1) * 20);

      if (products.length === 0) return null;

      return (
        <ActiveLink
          key={currentPageNumber}
          href={`/products/${currentPageNumber}`}
          className="text-xl px-4 py-2 hover:text-blue-600"
          activeClassName="bg-blue-400 text-white rounded-2xl "
          exact={true}
        >
          {currentPageNumber}
        </ActiveLink>
      );
    })
  );

  return (
    <div className="mx-auto flex justify-center items-center mt-6 p-8">
      <div className="space-x-6">{pages}</div>
    </div>
  );
};
