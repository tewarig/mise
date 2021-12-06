import { Box, Heading ,Link } from "@chakra-ui/react";
import { useRouter } from 'next/router'


export default function ShopCard({cardImage, cardName,  link}) {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push(link);

    }


  return (
    <>
      <Box
        borderRadius="8px"
        backdropBlur="100"
        backgroundImage={cardImage}
        onClick={handleClick}
      >
        <Box marginTop="20vh" marginLeft="2vh" marginRight="2vh" paddingBottom="10vh" color="white">
          <Heading> {cardName} </Heading>
        </Box>
      </Box>

    </>
  );
}
