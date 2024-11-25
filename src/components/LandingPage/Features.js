import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import { fontSize } from "@mui/system";

function Features() {

  let fontsize = "3rem"
     
  const features = [
    {
      icon: <BoltIcon sx={{fontSize:fontsize, color:"#5c0c0c"}} />,
      heading: "Fast",
      desc: "Earum nostrum obcaecati totam tempore perspiciatis enim ipsum officia exercitationem",
    },
    {
      icon: <BoltIcon sx={{fontSize:fontsize, color:"#5c0c0c"}} />,
      heading: "Fast",
      desc: "Earum nostrum obcaecati totam tempore perspiciatis enim ipsum officia exercitationem",
    },
    {
      icon: <BoltIcon sx={{fontSize:fontsize, color:"#5c0c0c"}} />,
      heading: "Fast",
      desc: "Earum nostrum obcaecati totam tempore perspiciatis enim ipsum officia exercitationem",
    },
    {
      icon: <BoltIcon sx={{fontSize:fontsize, color:"#5c0c0c"}} />,
      heading: "Fast",
      desc: "Earum nostrum obcaecati totam tempore perspiciatis enim ipsum officia exercitationem",
    },
  ];

  return (
    <div className="features-section py-20 flex flex-wrap items-center justify-center gap-6">
      {features.map((card, index) => (
        <div
          key={index}
          className="feature-card w-72 h-64 text-black p-2 text-center rounded-md bg-white shadow-2xl"
        >
          {card.icon}
          <h2 className="heading text-3xl my-4">{card.heading}</h2>
          <p className="description text-justify text-gray-500">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
