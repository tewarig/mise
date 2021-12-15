import NavBar from "../comp/navbar";
import Footer from "../comp/footer";
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
} from "@chakra-ui/react";

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

  return (
    <>
      <NavBar />
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
                <Button>Add Order</Button>
              </Flex>
              <hr />
              bla bla bla
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
                <Button>Add Products</Button>
              </Flex>
              <hr/>
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
                {/* <Text fontSize={"lg"} color={"gray.600"}>
              this page is for admin users
          </Text> */}
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
