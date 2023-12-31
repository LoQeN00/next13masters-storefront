import React, { Suspense } from 'react';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '@/api/products';
import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage';
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription';
import { SuggestedProducts } from '@/ui/organisms/SuggestedProducts';
import { BackButton } from '@/ui/atoms/BackButton';
import { prodOnly } from '@/utils';

type Props = {
  params: {
    productId: string;
  };
};

const generateMetadata = prodOnly(async ({ params }: Props): Promise<Metadata> => {
  const product = await getProductById(params.productId);

  if (!product) {
    notFound();
  }

  return {
    title: `${product.name} - Sklep internetowy`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Sklep internetowy`,
      description: product.description,
      images: [
        {
          url: product.coverImage.src,
        },
      ],
    },
  };
});

const Page = async ({ params }: Props) => {
  const product = await getProductById(params.productId);

  return (
    <>
      <section className="max-w-xl mx-auto">
        <div className="flex space-x-6">
          <BackButton />
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        </div>

        <article className="mb-4">
          <ProductCoverImage {...product.coverImage} />
          <ProductListItemDescription product={product} />
        </article>
      </section>
      <Suspense fallback={`Ładownie....`}>
        <SuggestedProducts />
      </Suspense>
    </>
  );
};

export default Page;

export { generateMetadata };
