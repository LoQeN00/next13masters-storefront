import { loadEnvConfig } from '@next/env';
import { ProductGetListDocument, type TypedDocumentString, ProductGetByIdDocument } from './../gql/graphql';
import { type ProductItemType } from '@/ui/types';

loadEnvConfig(process.cwd());

type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

export const getProductsList = async (take?: number, offset?: number) => {
  const url = process.env.GRAPHQL_URL as string;

  if (!url) throw new Error('GRAPQH_URL is not defined');

  const graphqlResponse = await executeGraphql(ProductGetListDocument, {
    take,
    skip: offset,
  });

  const products = graphqlResponse.products.map(
    (product): ProductItemType => ({
      id: product.id,
      categories: product.categories,
      coverImage: {
        alt: product.name,
        src: product.image,
      },
      description: product.description,
      name: product.name,
      price: product.price,
    })
  );

  return products;
};

export const getProductById = async (id: ProductResponseItem['id']) => {
  const url = process.env.GRAPHQL_URL as string;

  if (!url) throw new Error('GRAPQH_URL is not defined');

  const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {
    id,
  });

  if (!graphqlResponse.product) throw new Error(`Product with id ${id} not found`);

  const productFromResponse = graphqlResponse.product;

  productFromResponse.categories;

  const product: ProductItemType = {
    id: productFromResponse.id,
    categories: productFromResponse.categories,
    coverImage: {
      alt: productFromResponse.name,
      src: productFromResponse.image,
    },
    description: productFromResponse.description,
    name: productFromResponse.name,
    price: productFromResponse.price,
  };

  return product;
};

export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables
): Promise<TResult> => {
  const url = process.env.GRAPHQL_URL as string;

  if (!url) throw new Error('GRAPHQL_URL is not defined');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  type GraphqlResponse<T> = { data?: undefined; errors: { message: string }[] } | { data: T; errors?: undefined };

  const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

  if (graphqlResponse.errors) {
    throw new TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
  }

  return graphqlResponse.data;
};
