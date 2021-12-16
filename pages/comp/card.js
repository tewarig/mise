import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input
} from "@chakra-ui/react";
import React from "react";
import { useGlobalState } from "../utils.js/state";


export default function ProductSimple({ image, categories, name, price, key ,description }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const state = useGlobalState();
    const addToCart = () => {
        const product = {
            image,
            categories,
            name,
            price,
            key,
            description
        }
         state.merge(product);
         onClose();
    }
 
   
  return (
    <Center py={12} key={key} onClick={onOpen}>
           
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Heading>{name}</Heading> ₹ {price}</DrawerHeader>

          <DrawerBody>
          <Image
            rounded={"lg"}
            height={'100%'}
            width={'100%'}
            objectFit={"cover"}
            src={image}
          />
           <Text alignSelf="center">{description}</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color='gray.900' onClick={addToCart}>Add to cart</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {categories}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ₹{price + Math.round(Math.random()) * 1000 + 10}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
