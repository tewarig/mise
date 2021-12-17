import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import Footer from "./comp/footer";
import NavBar from "./comp/navbar";
import { Heading } from "@chakra-ui/react";
import { Button, Box  , Flex} from "@chakra-ui/react";
import user from "../backend/model/user";
import Link from "next/link";
import { useEffect  } from "react";
import { useRouter } from 'next/router'
import { reSet } from "../utils.js/state";



export default function Orders() {
  const router = useRouter()

  useEffect(()=>{
    localStorage.removeItem('state');
    reSet();
  },[]);
  
  return (
    <>
      <NavBar />

      <Flex
        aligin="center"
        alignSelf="center"
        alignItems="center"
        alignContent="center"
        marginTop="5%"
        marginBottom="5%"
        flexDirection="column"
      >
        <ConfettiExplosion
          force={0.6}
          duration={5000}
          particleCount={200}
          floorHeight={1600}
          floorWidth={1600}
        />
        <Heading margin="5%"> Yeah {user.email} </Heading>
        Your Order have Been Placed
        <Button margin="3%">
          <Link href={{ pathname: "/" }} margin="4%">
            <a>Buy More Products</a>
          </Link>
        </Button>
      </Flex>

      <Footer />
    </>
  );
}
