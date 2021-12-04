import { Box, Heading ,Link } from "@chakra-ui/react";
export default function ShopCard({cardImage, cardName,  link}) {
    
  return (
    <>
      <Box
        borderRadius="8px"
        backdropBlur="100"
        backgroundImage={cardImage}
      >
        <Box marginTop="20vh" marginLeft="2vh" marginRight="2vh" paddingBottom="10vh" color="white">
          <Heading> {cardName} </Heading>
        </Box>
      </Box>

    </>
  );
}
