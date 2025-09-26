import React, { use } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import Summary from "./Summary/Summary";

const CustomerTickets = ({
  ticketsPromise,
  summary,
  setSummary,
  progressCount,
  setProgressCount,
}) => {
  const customerTickets = use(ticketsPromise);

  const handleCardClick = (ticket) => {
    const foundTicket = customerTickets.find((item) => item.id === ticket.id);

    if (foundTicket) {
      const newSummary = [...summary, foundTicket];
      setSummary(newSummary);
    }
    setProgressCount(progressCount + 1);
    alert("Card Added");
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-3">
          <h2 className="text-xl font-bold mb-2">Customer Tickets</h2>
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {customerTickets.map((ticket) => (
              <CustomerTicket
                key={ticket.id}
                handleCardClick={handleCardClick}
                ticket={ticket}
              />
            ))}
          </div>
        </div>

  {/* ekhane summary part ache  */}
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-2">Task Status</h2>
          {summary.length === 0 ? (
            <p className="text-left text-gray-500">
              Select a ticket to add to Task Status
            </p>
          ) : (
            summary.map((ticket) => (
              <Summary
                summary={summary}
                setSummary={setSummary}
                key={ticket.id}
                ticket={ticket}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
