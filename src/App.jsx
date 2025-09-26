import { Suspense } from "react";
import "./App.css";
import Box from "./Components/Box/Box";
import Card from "./Components/Card/Card";
import CopyRight from "./Components/CopyRight/CopyRight";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchData();
  return (
    <>
      <Navbar></Navbar>
      <Box></Box>
      <Suspense
        fallback={<span className="loading loading-dots loading-md"></span>}
      >
        {<Card fetchPromise={fetchPromise}></Card>}
      </Suspense>
      <Footer></Footer>
      <CopyRight></CopyRight>
      <Toaster />
    </>
  );
}

export default App;
