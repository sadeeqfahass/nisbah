import React from "react";
import Nav from "./Nav";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AppleIcon from "@mui/icons-material/Apple";
import ActionButtons from "./ActionButtons";
import { useNavigate } from "react-router-dom";

function Hero() {
    const Navigate = useNavigate()

  return (
    <div className="hero-section h-screen pb-5">
      <Nav />
      <div className="main flex justify-center items-center my-10 ">
        <div className="left w-1/3 px-4">
          <h1 className="heading text-4xl font-semibold mb-4">
            Lorem ipsum dolor sit amet consectetur 
          </h1>
          <p className="sub-heading text-sm">
            Earum nostrum obcaecati totam tempore perspiciatis enim ipsum
            officia exercitationem sed iusto!
          </p>
          <div className="btn-con mt-5 flex flex-wrap items-center gap-4">
            <ActionButtons
              icon={<AppleIcon sx={{fontSize:"3rem"}} fontSize="large" />}
              topText="Download on the"
              bottomText="App Store"
            />
            <ActionButtons
              icon={<PlayArrowIcon sx={{fontSize:"3rem"}} fontSize="large" />}
              topText="Get it on"
              bottomText="Google Play"
              
            />
          </div>
        </div>
        <div className="right w-1/4 flex items-center justify-center">
          <img className="w-60" src="/assets/phone.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
