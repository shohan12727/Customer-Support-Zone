import React from "react";
import { SlCalender } from "react-icons/sl";
const CustomerTicket = ({ ticket }) => {
  console.log(ticket);
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div className="card_div  bg-white p-3 rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <p className="bg-[#B9F8CF] rounded-xl  px-2 py-1">
          <span className="bg-[#02A53B] rounded-full h-3 w-3 inline-block"></span>{" "}
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
          <h2>{priority}</h2>
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
