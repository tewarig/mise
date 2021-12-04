import { Box  , Image ,Heading,  useBreakpointValue} from "@chakra-ui/react";

export default function MainOfferCard({imageLink , cardText}){
    console.log(cardText);
    const variant = useBreakpointValue({ base: 'outline', md: 'solid' })
    return(<>
    <Box m="10px">
    
    {/* <Image
          src={imageLink}
          alt="Lovely Image"
          maxH="400px"
          minW="100%"
          objectFit="cover"
          flex="1"
          align="center"
          borderRadius={8}
        /> */}
        <Box backgroundImage={imageLink} objectFit="cover" flex="1" color={'white'} borderRadius="8px">
          <Heading  paddingTop="25vh" paddingLeft="2vh" paddingBottom="3vh"> {cardText}
         </Heading> 
        </Box>
    </Box>
    </>);
}