import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AppleIcon from "@mui/icons-material/Apple";
import ActionButtons from "./ActionButtons";

const CTASection = () => {
  return (
    <div className="cta-section flex flex-col items-center justify-center bg-gray-100 p-20">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Download the <span className="nisbah-text"> Nisbah </span> App now!
      </h2>
      <p className="text-gray-600 mb-6">
        Get the best experience by downloading our app from your favorite store.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ActionButtons
          icon={<AppleIcon sx={{ fontSize: "3rem" }} fontSize="large" />}
          topText="Download on the"
          bottomText="App Store"
          link="https://www.apple.com/app-store/"
          />
        <ActionButtons
          icon={<PlayArrowIcon sx={{ fontSize: "3rem" }} fontSize="large" />}
          topText="Get it on"
          bottomText="Google Play"
          link="https://play.google.com/store"
        />
      </div>
    </div>
  );
};

export default CTASection;
