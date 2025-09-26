import React from "react";

const Summary = ({ ticket, summary, setSummary }) => {
  // Function to remove ticket from summary
  //   const handleRemoveTicket = (ticketId) => {
  //     const updatedSummary = summary.filter(item => item.id !== ticketId);
  //     setSummary(updatedSummary);
  //   };

  const handleCompleteBtn = () => {
    alert("completed");
  };

  return (
    <div className="bg-white p-3 rounded-sm shadow-md mb-2 ">
      <h3 className="font-medium text-xl text-center">{ticket.title}</h3>
      <button
        onClick={handleCompleteBtn}
        className="bg-[#02A53B] hover:bg-[#028C32] w-full  text-white py-2 rounded-md mt-3 px-4"
      >
        Complete
      </button>
    </div>
  );
};

export default Summary;
