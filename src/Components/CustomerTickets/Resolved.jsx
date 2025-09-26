import React from "react";

const Resolved = ({ element }) => {
  // console.log(element);

  return (
    <div>
      <h3 className="font-medium bg-[#E0E7FF] py-2 px-4 rounded-md mt-2 text-xl text-center">
        {element.title}
      </h3>
    </div>
  );
};

export default Resolved;
