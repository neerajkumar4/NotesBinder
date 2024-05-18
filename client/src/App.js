import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Explore, Home, Profile, Signin, Signup } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar,PrivateRoute } from "./components";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
