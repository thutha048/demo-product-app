import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { ProductCard, ProductsCard } from "../components";
import { useAppQuery } from "../hooks";
import { ProductList } from "../components/ProductList";

export default function HomePage() {
  const { data, isLoading, refetch, isRefetching } = useAppQuery({
    url: "/api/products",
  }); 

  console.log("data: ", data);

  return (
    <Page title="Home">
      <Layout>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
        <Layout.Section>
          <ProductList
            data={data}
            isLoading={isLoading}
            isRefetching={isRefetching}
          />
          {/* <ProductCard {...data?.products[0]} />  */}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
