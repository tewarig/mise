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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import { ImBin } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";

export default function Admin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [imageLink1, setImageLink1] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [productsData, setProductsData] = useState();
  const [orderData, setOrderData] = useState();

  const getProducts = async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND + "/products"
    );
    const { data } = response;
    console.log(data);
    const trimedValue = data.slice(0, 6);
    setProductsData(trimedValue);
  };
  const getOrders = async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND + "/orders"
    );
    const { data } = response;
    setOrderData(data);
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("Adminlogin");
    if (isLogin) {
      console.log(isLogin);
      const loginConst = isLogin;

      if (loginConst == "true") {
        setLogin(true);
      }
      if (login) {
        localStorage.setItem("Adminlogin", JSON.stringify(true));
      }
    } else {
      localStorage.setItem("Adminlogin", JSON.stringify(false));
    }
    getProducts();
    getOrders();
  }, [login]);

  const deleteItem = (pname) => {
    delteProduct(pname);
  };
  const delteProduct = async (pname) => {
    const toDelete = { name: pname };
    const meow = await axios.delete(
      process.env.NEXT_PUBLIC_BACKEND + "/products",
      {
        data: toDelete,
      }
    );
    deleted();
    setTimeout(() => {
      Router.reload();
    }, 3000);
  };
  const checkLogin = () => {
    console.log(email);
    console.log(password);
    console.log(process.env.NEXT_PUBLIC_ADMIN_MAIL);
    if (
      email == process.env.NEXT_PUBLIC_ADMIN_MAIL &&
      password == process.env.NEXT_PUBLIC_ADMINPASSWORD
    ) {
      setLogin(true);
    } else {
      console.log(email);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const image = [];
  image.push(imageLink1);
  const addToDataBase = () => {
    const product = {
      name,
      image,
      price,
      description,
      categories,
    };
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND + "/products", product)
      .then(console.log("data added"));
    onClose();
    productAdded();
    setTimeout(() => {
      Router.reload();
    }, 3000);
  };
  const deleted = () => toast("Product removed from the Shop");
  const productAdded = () => toast("Product added to the Shop");
  const redirectToProduct = (e) => {
    e.preventDefault();
    Router.push("admin/product");
  };

  return (
    <>
      <NavBar />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add a product </DrawerHeader>

          <DrawerBody>
            <Input
              margin={1}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              margin={1}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              margin={1}
              placeholder="Image Link "
              onChange={(e) => setImageLink1(e.target.value)}
            />

            <Input
              size="lg"
              margin={1}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              margin={1}
              placeholder="Categories"
              onChange={(e) => setCategories(e.target.value)}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={addToDataBase}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {login ? (
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
              {orderData &&
                orderData.map((orders) => (
                  <Box
                    minW="lg"
                    margin="3%"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Flex justifyContent="space-between" margin="5%">
                      <div>
                        <h2> id : {orders._id}</h2>
                        <h3> customerEmail : {orders.email}</h3>
                        <h4> amount $ {orders.amount}</h4>
                      </div>
                    </Flex>
                  </Box>
                ))}
              <Box
                margin="6px"
                borderRadius="8px"
                borderWidth="1px"
                padding="8px"
                align="center"
              >
                <Button onClick={redirectToProduct}> View All</Button>
              </Box>
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
                <Button onClick={onOpen}>Add Products</Button>
              </Flex>
              <hr />
              {productsData &&
                productsData.map((item) => (
                  <Box
                    id={item.id}
                    margin="6px"
                    borderRadius="8px"
                    borderWidth="1px"
                    padding="8px"
                  >
                    <Flex justifyContent="space-between">
                      <img height="10%" width="20%" src={item.image[0]} />
                      <div>
                        <h2> Name : {item.name}</h2>
                        <h3> id : {item._id}</h3>
                        <h4> Categorie: {item.categories}</h4>
                      </div>
                      <Button onClick={() => deleteItem(item.name)}>
                        {" "}
                        <ImBin />{" "}
                      </Button>
                    </Flex>
                  </Box>
                ))}

              <Box
                margin="6px"
                borderRadius="8px"
                borderWidth="1px"
                padding="8px"
                align="center"
              >
                <Button onClick={redirectToProduct}> View All</Button>
              </Box>
            </Box>
          </Flex>

          <Button
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
            ml="40%"
            mb="3%"
          >
            {" "}
            Logout{" "}
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Flex
            minH={"80vh"}
            align={"center"}
            justify={"center"}
            minW={"60vh"}
            bg={"grey.50"}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}> Admin </Heading>

                {email}
                {password}
              </Stack>
              <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
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
      <ToastContainer />
      <Footer />
    </>
  );
}
