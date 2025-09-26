import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

const fetchingTickets = async () => {
  const result = await fetch("/tickets.json");
  return result.json();
};

const ticketsPromise = fetchingTickets();

function App() {
  const [summary, setSummary] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [resolved, setResolved] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        progressCount={progressCount}
        resolvedCount={resolvedCount}
      ></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <CustomerTickets
          setResolved={setResolved}
          resolved={resolved}
          setResolvedCount={setResolvedCount}
          resolvedCount={resolvedCount}
          progressCount={progressCount}
          setProgressCount={setProgressCount}
          summary={summary}
          setSummary={setSummary}
          ticketsPromise={ticketsPromise}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
