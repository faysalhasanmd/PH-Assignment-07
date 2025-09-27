import { Suspense, useState } from "react";
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

const fetchPromise = fetchData();
function App() {
  const [resolved, setResolved] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Box
        resolved={resolved}
        setResolved={setResolved}
        selectedPerson={selectedPerson}
      ></Box>
      <Suspense
        fallback={
          <div className="flex justify-center items-center mt-7">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        }
      >
        {
          <Card
            fetchPromise={fetchPromise}
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
            resolved={resolved}
            setResolved={setResolved}
          ></Card>
        }
      </Suspense>
      <Footer></Footer>
      <CopyRight></CopyRight>
      <Toaster />
    </>
  );
}

export default App;
