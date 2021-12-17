import { Box, Button, Heading } from "@chakra-ui/react";
export default function OfferSection() {
  return (
    <>
      <Box margin="10px">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Box
            width="80vh"
            borderRadius="8px"
            backgroundImage="https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          >
            <Box padding="10px" paddingTop="20vh" paddingBottom="20vh">
              <Box display="flex" flexDirection="column">
                <Heading> Machure BAG</Heading>
                Perfect fit for you college
              </Box>
              <a href="/categories/bags">
              <Button marginTop="1vh"> Buy Bags</Button>
              </a>
            </Box>
          </Box>
          <Box
            width="80vh"
            borderRadius="8px"
            backgroundImage="https://images.unsplash.com/photo-1618333258404-f509733839c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          >
            <Box padding="10px" paddingTop="20vh" paddingBottom="20vh">
              <Box display="flex" flexDirection="column">
                <Heading> Hoodie Sale</Heading>
                Be the part of the hoodie gang 
              </Box>
              <a href="/categories/hoodie">
              <Button marginTop="1vh"> View All</Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
