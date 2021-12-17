import { Box, Heading ,Link , useMediaQuery} from "@chakra-ui/react";
import { useRouter  } from 'next/router'


export default function ShopCard({cardImage, cardName,  link , isMobile}) {
  const [check] = useMediaQuery("(min-width: 1025px)");

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
        margin={check ? "0px": "10px"}
      >
        <Box marginTop="20vh" marginLeft="2vh" marginRight="2vh" paddingBottom="10vh" color="white">
          <Heading color={check ? "black" : "white"}> {cardName} </Heading>
        </Box>
      </Box>

    </>
  );
}
