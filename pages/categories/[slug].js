import { useEffect, useState } from "react";
import Footer from "../comp/footer";
import NavBar from "../comp/navbar";
import { useRouter } from "next/router";
import { Heading, Divider, Grid } from "@chakra-ui/react";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";
import ProductSimple from "../comp/card";

export default function Categories({ data }) {
  const route = useRouter();
  const { slug } = route.query;
  const products = data.filter((x) => x.categories === slug);

  return (
    <>
      <NavBar />
      <Heading ml="5%" paddingTop="3%" paddingBottom="2%" >
        {slug} wear
        <Divider width="20%" marginTop="1%" />
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>

        {products.map((x) => (
          <ProductSimple
             key={x._id}
            image={x.image[0]}
            categories={x.categories}
            name={x.name}
            price={x.price}
            description={x.description}
          />
        ))}
        </Grid>
      </Heading>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const request = await fetch("http://localhost:4000/products");

  const data = await request.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      // to revailadte the props
      revalidate: 10,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "winter" } },
      { params: { slug: "party" } },
      { params: { slug: "summer" } },
      { params: { slug: "traditional" } },
    ],
    fallback: false,
  };
}
