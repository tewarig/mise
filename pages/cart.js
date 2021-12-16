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
} from "@chakra-ui/react";
import { ImBin } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";

export default function cart() {
  const [productsData, setProductsData] = useState();

  const deleted = () => toast("Product removed from the Shop");


  const getProducts = () => {
    const response = JSON.parse(localStorage.getItem('state'));

    
    console.log(response);
    setProductsData(response);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <NavBar />
      <Heading ml="40%" mt="3%" mb="4%" alignSelf="center"> Products in your cart </Heading>
      {productsData &&
        productsData.map((item) => (
          <Box
            id={item.id}
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
              <img height="5%" width="10%" src={item.image} />
              <div>
                <Heading>{item.name}</Heading> 
              </div>
              <Button onClick={() => deleteItem(item.name)}>
                {" "}
                <h3> ₹ {item.price}</h3>
              </Button>
            </Flex>
          </Box>
        ))}

     <ToastContainer/>
      <Footer />
    </>
  );
}
