import React, { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import Summary from "./Summary/Summary";
import { toast } from "react-toastify";
import Resolved from "./Resolved";

const CustomerTickets = ({
  ticketsPromise,
  summary,
  setSummary,
  progressCount,
  setProgressCount,
  setResolvedCount,
  resolvedCount,
  setResolved,
  resolved,
}) => {
  const customerTickets = use(ticketsPromise);
  const [completedTicketIds, setCompletedTicketIds] = useState([]);
  const handleCardClick = (ticket) => {
    const foundTicket = customerTickets.find((item) => item.id === ticket.id);

    if (foundTicket) {
      const newSummary = [...summary, foundTicket];
      setSummary(newSummary);
    }
    setProgressCount(progressCount + 1);
    // alert("Card Added");
    toast.success("Added");
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-3">
          <h2 className="text-xl font-bold mb-2">Customer Tickets</h2>
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {customerTickets
              .filter((ticket) => !completedTicketIds.includes(ticket.id))
              .map((ticket) => (
                <CustomerTicket
                  key={ticket.id}
                  handleCardClick={handleCardClick}
                  ticket={ticket}
                />
              ))}
          </div>
        </div>

        {/* ekhane summary and part ache  */}
        <div className="col-span-1">
          <div>
            <h2 className="text-xl font-bold mb-2">Task Status</h2>
            {summary.length === 0 ? (
              <p className="text-left text-gray-500">
                Select a ticket to add to Task Status
              </p>
            ) : (
              summary.map((ticket) => (
                <Summary
                  setCompletedTicketIds={setCompletedTicketIds}
                  completedTicketIds={completedTicketIds}
                  summary={summary}
                  setSummary={setSummary}
                  key={ticket.id}
                  ticket={ticket}
                  resolvedCount={resolvedCount}
                  setResolvedCount={setResolvedCount}
                  progressCount={progressCount}
                  setProgressCount={setProgressCount}
                  setResolved={setResolved}
                >
                </Summary>
              ))
            )}
          </div>
          {/* resolved part */}
          <div>
            <h2 className="text-xl font-bold mt-4 my-2">Resolved Task</h2>
            {resolved.length === 0 ? (
              <p className="text-left text-gray-500">No resolved tasks yet.</p>
            ) : (
              resolved.map((element, index) => (
                <Resolved
                  key={index}
                  resolved={resolved}
                  setResolved={setResolved}
                  element={element}
                ></Resolved>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
