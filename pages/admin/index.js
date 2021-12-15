import NavBar from "../comp/navbar";
import Footer from "../comp/footer";
import React from "react";
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import RecentOrders from "../comp/recentOrders";

export default function Admin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const isLogin = localStorage.getItem("Adminlogin");
    if (isLogin) {
      console.log(isLogin);
      const loginConst = isLogin;
      if (loginConst == "true") {
        setLogin(true);
      }
    } else {
      localStorage.setItem("Adminlogin", JSON.stringify(false));
    }
  }, [login]);

  const checkLogin = () => {
    console.log(email);
    console.log(password);
    if (
      (email = process.env.AdminMail) &&
      (password = process.env.AdminPassword)
    ) {
      console.log("You are right");
    } else {
      console.log(email);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <>
      <NavBar />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add a product </DrawerHeader>

          <DrawerBody>
            <Input margin={1} placeholder='Name' />
            <Input  margin={1} placeholder='Image Link 1' />
            <Input  margin={1} placeholder='Image Link 2' />
            <Input  margin={1} placeholder='Image Link 3' />
            <Input  margin={1} placeholder='Image Link 3' />
            <Input  margin={1} placeholder='price' />
            <Input size="lg"  margin={1} placeholder='Description' />
            <Input   margin={1} placeholder='Categories' />






          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {!login ? (
        <>
          <Flex margin="5%">
            <Box
              minW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Flex margin="1em" justifyContent="space-between">
                <Heading ml="5px"> Recent Orders </Heading>
              </Flex>
              <hr />
            </Box>
            <Box
              minW="lg"
              ml="20em"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Flex margin="1em" justifyContent="space-between">
                <Heading ml="5px"> Products </Heading>
                <Button  onClick={onOpen}>Add Products</Button>
              </Flex>
              <hr />
            </Box>
          </Flex>
        </>
      ) : (
        <>
          {" "}
          <Flex
            minH={"80vh"}
            align={"center"}
            justify={"center"}
            minW={"60vh"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}> Admin </Heading>
                
                {email}
                {password}
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    {/* {email} */}
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Link color={"gray.800"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      bg={"gray.800"}
                      color={"white"}
                      _hover={{
                        bg: "gray.600",
                      }}
                      onClick={() => {
                        checkLogin(email, password);
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>{" "}
        </>
      )}

      <Footer />
    </>
  );
}
