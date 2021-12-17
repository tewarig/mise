import Footer from "./comp/footer";
import NavBar from "./comp/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { ImBin } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

export default function cart() {
  const { user, error, isLoading } = useUser();
  const [productsData, setProductsData] = useState();
  const [finalProducts, setFinalProducts] = useState();

  const deleted = () => toast("Product removed from the Shop");

  const getProducts = () => {
    const response = JSON.parse(localStorage.getItem("state"));

    console.log(response);
    setProductsData(response);
    if (productsData) {
    }
  };
  const price = () => {
    let price = 0;
    if (productsData) {
      for (var i = 0; i < productsData.length; i++) {
        price += productsData[i].data.price;
      }

      return price;
    }

    var count = {};
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (productsData) {
      const arrayUniqueByKey = [
        ...new Map(
          productsData.map((item) => [item.data["name"], item])
        ).values(),
      ];
      setFinalProducts(arrayUniqueByKey);
    }
  }, [productsData]);
  const countItems = (array, itemName) => {
    let count = 0;
    console.log(array.length);
    for (var i = 0; i < array.length; i++) {
      if (itemName == array[i].data.name) {
        count++;
      }
    }
    return count;
  };

  const checkout = () => {
    Router.push("/checkout");
  };
  return (
    <>
      <NavBar />
      <Heading ml="40%" mt="3%" mb="4%" alignSelf="center">
        {" "}
        Products in your cart - {finalProducts && finalProducts.length}
      </Heading>
      {finalProducts &&
        finalProducts.map((item) => (
          <Box
            id={item.data.id}
            ml="20%"
            mr="20%"
            borderRadius="8px"
            borderWidth="1px"
            padding="8px"
            alignSelf="center"
            mt="2%"
            mb="3%"
          >
            <Flex justifyContent="space-between">
              <img
                height="5%"
                width="10%"
                src={item.data.image}
                borderRadius="8px"
              />
              <Heading alignSelf="center">{item.data.name}</Heading>
              <Flex
                justifyContent="center"
                flexDirection="row"
                alignSelf="center"
              >
                <Flex alignSelf="center" flexDirection="row">
                  {countItems(productsData, item.data.name)} x{" "}
                  <h3> ${item.data.price}</h3>
                </Flex>
                <Button ml="3px">
                  {" "}
                  ${countItems(productsData, item.data.name) *
                    item.data.price}{" "}
                </Button>
              </Flex>
            </Flex>
          </Box>
        ))}
      {!user && (
        <Badge alignSelf="center" alignContent="center" ml="20%">
          {" "}
          You need to login before Checkout{" "} <a href="/api/auth/login"> Login </a>
        </Badge>
      )}

      <Box
        ml="20%"
        mr="20%"
        borderRadius="8px"
        borderWidth="1px"
        padding="8px"
        alignSelf="center"
        mt="2%"
        mb="3%"
      >
        <Flex justifyContent="space-between">
          <Heading alignContent="center" alignSelf="center">
            {" "}
            Total Bill - {price()}{" "}
          </Heading>
          <Button onClick={checkout}> Checkout </Button>
        </Flex>
      </Box>
      <ToastContainer />
      <Footer />
    </>
  );
}
