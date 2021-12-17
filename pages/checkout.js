import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading, Box, Flex, Textarea } from "@chakra-ui/layout";
import Footer from "./comp/footer";
import NavBar from "./comp/navbar";
import { useState, useEffect } from "react";
import Script from "next/script";
import { PayPalButton } from "react-paypal-button-v2";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Router from "next/router";
import {useUser} from '@auth0/nextjs-auth0';

export default function Index() {
  const { user, error, isLoading } = useUser();
  const [productsData, setProductsData] = useState();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [name, setName] = useState();
  const [phoneNumer, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [pin, setPin] = useState();
  const [state, setState] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  setTimeout(() => {
    setScriptLoaded(true);
  }, 3000);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const response = JSON.parse(localStorage.getItem("state"));
  // setProductsData(response);
  const price = () => {
    let price = 0;
    if (response) {
      for (var i = 0; i < response.length; i++) {
        price += response[i].data.price;
      }
      console.log(price);
      return price;
    }

    var count = {};
  };

  const notify = () => toast.error("You need to fill all values!");

  const createOrder = () => {
    if (
      name == undefined ||
      phoneNumer == undefined ||
      address == undefined ||
      pin == undefined ||
      state == undefined
    ) {
      notify();
      return;
    }

       onOpen();
   

    const order = {
      name,
      phoneNumer,
      address,
      pin,
      state,
      amount: price(),
      email: user.email,
    };
  };
  const orderFinal = () => {
    const order = {
      name,
      phoneNumer,
      address,
      pin,
      state,
      amount: price(),
      email: user.email,
    };

    axios.post("http://localhost:4000/orders",order);
    localStorage.removeItem('state');
    let Orders = JSON.parse(localStorage.getItem("order"));
    if(Orders){
        Orders.push(order);
        localStorage.setItem("order",JSON.stringify(Orders));

         
    }else{
        let arr = [];
        arr.push(order);
        localStorage.setItem("order",JSON.stringify(arr));
    }


    Router.push("/orderSucess");

  };

  if (user) {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Payment Methords avaible</DrawerHeader>

            <DrawerBody>
              {scriptLoaded && (
                <Box alignContent="center" alignSelf="center">
                  <PayPalButton
                    alignSelf="center"
                    amount={price()}
                    onSuccess={(details, data) => {
                      console.log(details);
                      orderFinal();

                      //   return fetch("/paypal-transaction-complete", {
                      //     method: "post",
                      //     body: JSON.stringify({
                      //       orderID: data.orderID,
                      //     }),
                      //   });
                    }}
                  />
                </Box>
              )}
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Script
          src="https://www.paypal.com/sdk/js?client-id=AYIJQ2eYR1lxMuTgUaagVH2h77NJpu229ZZiI1s6zBX3eqiDUImiecc-6lU-3g7NeFQ2s3ihTdyXCOnR"
          type="text/javascript"
        />
        <NavBar></NavBar>
        <div>
          <Box
            ml="10%"
            mr="10%"
            borderRadius="8px"
            borderWidth="1px"
            alignSelf="center"
          >
            <Heading margin="2%">Checkout </Heading>
            <hr />
            <Box margin="4%">
              Hello, ✋ <Heading>{user.name} </Heading> we some details before
              we process your order.
            </Box>
            <Box margin="4%">
              <Input
                margin="1%"
                placeholder="Receptionist Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <Input
                margin="1%"
                placeholder="Phone Number"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></Input>
              <Input
                margin="1%"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                margin="1%"
                placeholder="pin"
                type="number"
                onChange={(e) => setPin(e.target.value)}
              />
              <Input
                margin="1%"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />
            </Box>
            <Flex margin="5%" direction="row" justifyContent="space-between">
              <Box alignSelf="flex-end">
                <Button ref={btnRef} colorScheme="teal" onClick={createOrder}>
                  Pay Now
                </Button>
              </Box>
              <Heading> ${price()} </Heading>
            </Flex>
          </Box>
        </div>
        <ToastContainer />
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      {" "}
      <NavBar />
      <Box align="center">
        <a href="/api/auth/login">
          <img src="https://media.istockphoto.com/photos/please-stop-picture-id180835523?k=20&m=180835523&s=612x612&w=0&h=RyPGPCnuCT0vtqPj69ExiaBTMIjb7ErYfewMFXnJjOY=" />
          <Heading>
            {" "}
            You can proceed any further you need to login to place your order{" "}
          </Heading>
          <Button margin="5%"> Login </Button>
        </a>{" "}
      </Box>
      <Footer />{" "}
    </>
  );
}
