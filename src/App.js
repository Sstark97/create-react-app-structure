import "./assets/styles/App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./containers/Layout";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout />
      </div>
    </ChakraProvider>
  );
}

export default App;
