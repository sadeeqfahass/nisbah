import React from "react";
import { useNavigate } from "react-router-dom";

function ActionButtons({ icon, topText, bottomText }) {
  const redirectlink = () => {
    const anchorTag = document.createElement("a");
    anchorTag.href = "https://mmt-ng.com/";
    anchorTag.target = "__blank";
  };

  return (
    <div onClick={redirectlink} className="btn bg-black flex items-center rounded-md w-52 py-2 shadow-2xl cursor-pointer hover:translate-y-1 transition-transform">
      {/* <AppleIcon sx={{ fontSize: "3rem" }} fontSize="large" /> */}
      {icon}
      <div className="btn-text">
        <p className="text-sm">{topText}</p>
        <p className="text-center text-xl -mt-1 font-semibold">{bottomText}</p>
      </div>
    </div>
  );
}

export default ActionButtons;
