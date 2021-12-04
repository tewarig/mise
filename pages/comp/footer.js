import { Button } from "@chakra-ui/button";
import { Center, Heading, Box } from "@chakra-ui/layout";
import {
    AtSignIcon ,
    InfoIcon
  } from '@chakra-ui/icons';

export default function Footer() {
  return (
    <>
      <Box backgroundColor={'black'}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box color="white" paddingTop="5vh" paddingBottom="10vh" paddingLeft="10vh">
            © Mesi - Gaurav Tewari
          </Box>
          <Box color="white" paddingTop="5vh" paddingBottom="10vh" paddingRight="5vh" display="flex" flexDirection="column">
            <Box>  <AtSignIcon />  {' '} hello@gauravtewari.xyz
               </Box>
               <Box>  <InfoIcon />  {' '} tewarig
               </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
