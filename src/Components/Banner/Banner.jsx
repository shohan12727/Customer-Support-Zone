import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
console.log(vector1);

const Banner = () => {
  const vector1Style = {
    background: `linear-gradient(to right, #632EE3, #9F62F2)`,
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
    position: "relative",
  };
  const vector2Style = {
    background: `linear-gradient(to right, #54CF68, #00827A)`,
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
    position: "relative",
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto md:py-15 py-5 flex md:flex-row flex-col gap-4">
        <div className="flex-1">
          <div
            className="rounded-md flex justify-center items-center"
            style={vector1Style}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${vector1}")`,
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 100%",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${vector2}")`,
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 100%",
              }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-center items-center">
              <h1 className="text-white text-2xl font-bold">In-Progress</h1>
              <h1 className="text-white text-4xl font-bold">0</h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            className="rounded-md flex justify-center items-center"
            style={vector2Style}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${vector1}")`,
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 100%",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${vector2}")`,
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 100%",
              }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-center items-center">
              <h1 className="text-white text-2xl font-bold">Resolved</h1>
              <h1 className="text-white text-4xl font-bold">0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
