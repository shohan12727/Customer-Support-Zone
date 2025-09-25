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
      <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
    </>
  );
}

export default App;
