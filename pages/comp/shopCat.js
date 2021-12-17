import {Box, Heading , Button , Image , Center} from '@chakra-ui/react';
import { FiArrowRight } from "react-icons/fi";
import ShopCard from './shopCard';
import { useMediaQuery ,useBreakpointValue } from '@chakra-ui/react'

export default function ShopCategories({cardData}){
    const [check] = useMediaQuery("(min-width: 1025px)");
    return(

        <>
        <Box margin="10" flexDirection="row" display="flex" justifyContent="space-between">
            <Heading color={'blue.900'}> Shop by Categories</Heading>
            <Button> <FiArrowRight/> </Button>
         
        </Box>
        <Box margin="10" flexDirection={useBreakpointValue({ base: "column", md: "row" })} justifyContent="space-evenly" display="flex" >
           {cardData &&(
               cardData.map( data=> (
                   
                   <ShopCard   key={data.key} cardImage={data.photoLink} cardName={data.name} link={data.link} />
                   
               )))
           }
 
        </Box>
        </>
    );
}