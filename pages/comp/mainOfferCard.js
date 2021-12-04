import { Box  , Image ,Heading,  useBreakpointValue} from "@chakra-ui/react";

export default function MainOfferCard({imageLink , cardText}){
    console.log(cardText);
    const variant = useBreakpointValue({ base: 'outline', md: 'solid' })
    return(<>
    <Box m="5.5vh">
    
  
        <Box backgroundImage={imageLink} objectFit="cover" flex="1" color={'white'} borderRadius="8px">
          <Heading  paddingTop="25vh" paddingLeft="2vh" paddingBottom="3vh"> {cardText}
         </Heading> 
        </Box>
    </Box>
    </>);
}