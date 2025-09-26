import React from "react";
import { SlCalender } from "react-icons/sl";
const CustomerTicket = ({ ticket, handleCardClick }) => {
  // console.log(ticket);
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  const handleCard = () => {
    
    handleCardClick && handleCardClick(ticket);
  };

  return (
    <div onClick={handleCard} className="card_div  bg-white p-3 rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <p
          className={`rounded-xl  px-2 py-1 ${
            status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
          }`}
        >
          <span
            className={`${
              status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
            } rounded-full h-3 w-3 inline-block mr-2`}
          ></span>
          {status}
        </p>
      </div>
      <div>
        <p className="text-[#627382] leading-snug my-3 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex text-[#627382]  items-center justify-between text-sm">
        <div className="flex gap-2">
          <h2>{id}</h2>
          <h2
          className={` font-semibold uppercase ${priority == "High Priority" ? "text-[#F83044]": "text-[#FEBB0C]" }`}
          >{priority}</h2>
        </div>
        <div className="flex gap-3">
          <h2>{customer}</h2>
          <div className="flex items-center gap-1">
            <SlCalender />
            {createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
