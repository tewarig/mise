import Footer from "../comp/footer";
import NavBar from "../comp/navbar";
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

export default function product() {
  const [productsData, setProductsData] = useState();

  const deleteItem = (pname) => {
    delteProduct(pname);
  };
  const delteProduct = async (pname) => {
    const toDelete = { name: pname };
    const meow = await axios.delete("http://localhost:4000/products", {
      data: toDelete,
    });
    deleted();
    setTimeout(() => {
      Router.reload();
    }, 3000);
  };
  const deleted = () => toast("Product removed from the Shop");


  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/products");
    const { data } = response;
    console.log(data);
    setProductsData(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <NavBar />
      <Heading ml="40%" mt="3%" mb="4%" alignSelf="center">All Products </Heading>
      {productsData &&
        productsData.map((item) => (
          <Box
            id={item.id}
            ml="15%"
            mr="15%"
            borderRadius="8px"
            borderWidth="1px"
            padding="8px"
            alignSelf="center"
            mt="2%"
            mb="3%"
            
            
          >
            <Flex justifyContent="space-between">
              <img height="5%" width="10%" src={item.image[0]} />
              <div>
                <h2> Name : {item.name}</h2>
                <h3> id : {item._id}</h3>
                <h4> Categorie: {item.categories}</h4>
                <h3> price: {item.price}</h3>
              </div>
              <Button onClick={() => deleteItem(item.name)}>
                {" "}
                <ImBin />{" "}
              </Button>
            </Flex>
          </Box>
        ))}

     <ToastContainer/>
      <Footer />
    </>
  );
}
