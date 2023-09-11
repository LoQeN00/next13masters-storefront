import { getProductsList } from '@/api/products';
import { ProductsPaginator } from '@/ui/molecules/ProductsPaginator';
import { ProductList } from '@/ui/organisms/ProductList';

type Props = {
  params: {
    pageNumber: string;
  };
};

export const generateStaticParams = async () => {
  const products = await getProductsList(999999, 0);

  const take = 20;

  const pagesCount = Math.ceil(products.length / take);

  return Array.from({ length: pagesCount }).map((_, index) => ({
    pageNumber: String(index + 1),
  }));
};

const ProductsPage = async ({ params: { pageNumber } }: Props) => {
  const take = 20;
  const offset = (Number(pageNumber) - 1) * take;

  const products = await getProductsList(take, offset);

  return (
    <>
      <ProductList products={products} />
      <ProductsPaginator pageNumber={pageNumber} />
    </>
  );
};

export default ProductsPage;
