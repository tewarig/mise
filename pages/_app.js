import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  

  return (
    <UserProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
export default MyApp;
