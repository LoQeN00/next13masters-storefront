import React, { type ComponentType } from "react";

type Props = {
  params: {
    filename: string;
  };
};

const Page = async ({ params }: Props) => {
  const { default: Page } = (await import(`./${params.filename}.mdx`)) as {
    default: ComponentType;
  };
  return (
    <article className="prose prose-lg">
      <Page />
    </article>
  );
};

export default Page;
