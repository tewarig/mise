import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading, Box, Flex, Textarea } from "@chakra-ui/layout";
import Footer from "./comp/footer";
import NavBar from "./comp/navbar";
import { useState, useEffect } from "react";
import Script from "next/script";
import { PayPalButton } from "react-paypal-button-v2";


export default function Index() {
  const { user, error, isLoading } = useUser();
  const [productsData, setProductsData] = useState();
  const [scriptLoaded , setScriptLoaded] = useState(false);

      setTimeout(()=>{
        setScriptLoaded(true);

      },3000)
  
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

  if (user) {
    return (
      <>
        <Script
          src="https://www.paypal.com/sdk/js?client-id=AYIJQ2eYR1lxMuTgUaagVH2h77NJpu229ZZiI1s6zBX3eqiDUImiecc-6lU-3g7NeFQ2s3ihTdyXCOnR"
          type="text/javascript"
        />
        <NavBar></NavBar>
        <div>
          {/* Welcome {user.name}! <a href="/api/auth/logout">Logout</a> */}
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
              <Input margin="1%" placeholder="Receptionist Name"></Input>
              <Input
                margin="1%"
                placeholder="Phone Number"
                type="number"
              ></Input>
              <Input margin="1%" placeholder="Address" />
              <Input margin="1%" placeholder="pin" type="number" />
              <Input margin="1%" placeholder="State" />
            </Box>
            <Flex margin="5%" direction="row" justifyContent="space-between">
              <Box alignSelf="flex-end">
                <Button> Pay Now </Button>
              </Box>
              <Heading> ₹{price()} </Heading>
            </Flex>

            {scriptLoaded && 
            <PayPalButton
        amount={price()}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
    }
          </Box>
        </div>
        <Footer></Footer>
      </>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
