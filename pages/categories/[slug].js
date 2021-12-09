import { useEffect, useState } from "react";
import Footer from "../comp/footer";
import NavBar from "../comp/navbar";
import { useRouter } from "next/router";
import { Heading, Divider } from "@chakra-ui/react";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";

export default function Categories({ data }) {
  console.log(data);
  const route = useRouter();
  const { slug } = route.query;

  return (
    <>
      <NavBar />
      <Heading ml="5%" paddingTop="3%" paddingBottom="2%">
        {slug} wear
        <Divider width="20%" marginTop="1%" />
      </Heading>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const request = await fetch(
    process.env.BACKEND_URL+ params.slug
  );
  const data = await request.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "winter" } },
      { params: { slug: "party" } },
      { params: { slug: "beach" } },
      { params: { slug: "traditional" } },
    ],
    fallback: false,
  };
}
