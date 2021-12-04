import { Box  , Image} from "@chakra-ui/react";

export default function MainOfferCard({imageLink , cardText}){
    console.log(cardText);
    return(<>
    <Box m="10px">
    
    <Image
          src={imageLink}
          alt="Lovely Image"
          maxH="400px"
          minW="100%"
          objectFit="cover"
          flex="1"
          align="center"
          borderRadius={8}
        />
        <Box position="absolute" mt="-7%" ml="2%" color={'blue.900'} fontWeight="900" fontSize="40">
          {cardText}
        </Box>
    </Box>
    </>);
}