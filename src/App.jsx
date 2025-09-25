import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";
import Navbar from "./Components/Navbar/Navbar";

const fetchingTickets = async () => {
  const result = await fetch("/tickets.json");
  return result.json();
};

const ticketsPromise = fetchingTickets();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </Suspense>
    </>
  );
}

export default App;
