import Header from "./Components/Header/Header";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import {Flex, Box} from '@chakra-ui/react'
function App() {
  return (
    <Box h="100vh">
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    <ToastContainer />
      <Header/>
      <Flex flex="1">
        <Routes />
      </Flex>

    </Box>
    
  );
}

export default App;
