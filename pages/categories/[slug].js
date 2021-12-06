import Footer from "../comp/footer"
import NavBar from "../comp/navbar"
import { useRouter } from "next/router";
import { Heading, Divider } from "@chakra-ui/react";
import makeFirstLetterCapital from "../utils/heading";

 export default function Categories (){
     const route  = useRouter();
     const { slug } =  route.query; 
    
    return(
        <>
        <NavBar/>
          <Heading ml="5%" paddingTop="3%" paddingBottom="2%">
          {makeFirstLetterCapital(slug)} wear
          <Divider width="20%"   marginTop="1%"/>
          </Heading> 
        <Footer/>
        </>
    )
}