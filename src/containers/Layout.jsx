import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Flex direction="column" height="100%">
      <Flex direction="row" height="5%" width="100%">
        <Header />
      </Flex>

      <Flex height="85%" width="100%">
        <Main />
      </Flex>

      <Flex height="10%" width="100%">
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
