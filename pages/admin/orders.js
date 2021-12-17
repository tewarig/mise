import Footer from "../comp/footer";
import NavBar from "../comp/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
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

export default function orders() {
  const [orders,setOrders] = useState();


  
 

  const getOrders = async () => {
    const response = await axios.get("http://localhost:4000/orders");
    const { data } = response;
    console.log(data);
    setOrders(data);

 };
  useEffect(() => {
   getOrders();
  }, []);

  const [allowAcess, setAllowAcess] = useState(false);
  useEffect(() => {
    const getData = localStorage.getItem("Adminlogin");
    if (getData) {
      if (getData == "true") {
        setAllowAcess(true);
      }
    } else {
    }
  }, []);
  return (
    <>
      <NavBar />

      <Heading ml="40%" mt="3%" mb="4%" alignSelf="center">
        All Orders{" "}
      </Heading>
      {orders &&
        allowAcess &&
       orders.map((item) => (
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
              <div>
                <h2> <b> Customer Name : </b>{item.name}</h2>
                <h3> <b> Order id : </b> {item._id}</h3>
                <h4>  <b> Costomer Email :  </b>{item.email}</h4>
                <h3>  <b>  price:   </b> ${item.amount}</h3>
                <h3>  <b>  phone no :   </b> {item.phoneNumer}</h3>
                <h3>  <b>  pin :   </b> {item.pin}</h3>


              </div>
              
            </Flex>
          </Box>
        ))}
      {!allowAcess && (
        <>
          <Heading
            alignItems="center"
            alignSelf="center"
            alignContent="center"
            ml="25%"
          >
            You need to login first to view all products{" "}
            <Button>
              {" "}
              <a href="/admin"> login</a>{" "}
            </Button>
          </Heading>
        </>
      )}

      <ToastContainer />

      <Footer />
    </>
  );
}
