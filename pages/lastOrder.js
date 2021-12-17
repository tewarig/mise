import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import Footer from "./comp/footer";
import NavBar from "./comp/navbar";
import { Heading } from "@chakra-ui/react";
import { Button, Box, Flex } from "@chakra-ui/react";
import user from "../backend/model/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { reSet } from "./utils.js/state";

export default function Orders() {
  const router = useRouter();
  const [data, setData] = useState();

  const getData = () => {
    if (typeof window !== "undefined") {
      const getOrders = JSON.parse(localStorage.getItem("order"));
      if (getOrders) {
        setData(getOrders);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if(!data){
      return null;
  }
  
  if(data.length == 0){
      return(
          <>
          <NavBar/>
           <Heading>  You have not place any order yet.

           </Heading>
          <Footer/>
          </>
      );
  }

  console.log(data);

  return (
    <>
      <NavBar />
      {data && (
        <>
          {data.map((x) => (
            <>
              <Box
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
                    <h2> Name : {x.name}</h2>
                    <h3> Phone Number : {x.phoneNumer}</h3>
                    <h3> Email : {x.email}</h3>
                    <h3> Amount : {x.amount}</h3>
                   
                  </div>
                 
                </Flex>
              </Box>
            </>
          ))}{" "}
        </>
      )}
      


      <Footer />
    </>
  );
}
