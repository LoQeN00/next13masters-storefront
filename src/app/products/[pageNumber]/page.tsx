import { getProductsList } from "@/api/products";
import { ProductsPaginator } from "@/ui/molecules/ProductsPaginator";
import { ProductList } from "@/ui/organisms/ProductList";

type Props = {
  params: {
    pageNumber: string;
  }
}

const ProductsPage = async ({params: {pageNumber}}: Props) => {

  const take = 20;
  const offset = (Number(pageNumber) - 1) * take;

  const products = await getProductsList(take, offset);

  const options = {
    canGoBack: Number(pageNumber) === 1 ? false : true,
    canGoForward: products.length < take ? false : true,
  }


  return (
    <>
      <ProductList products={products} />
      <ProductsPaginator options={options} pageNumber={pageNumber} />
    </>
  );
};

export default ProductsPage;
