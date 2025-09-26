import React from "react";
import { toast } from "react-toastify";

const Summary = ({
  ticket,
  summary,
  setSummary,
  resolvedCount,
  setResolvedCount,
  progressCount,
  setProgressCount,
  setCompletedTicketIds,
  setResolved,
}) => {
  const handleCompleteBtn = () => {
    // alert("completed");
    toast.success("Completed!!");
    setResolvedCount(resolvedCount + 1);
    setProgressCount(progressCount - 1);
    setSummary(summary.filter((item) => item.id !== ticket.id));
    setCompletedTicketIds((prev) => [...prev, ticket.id]);
    setResolved((prev) => [...prev, ticket]);
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
