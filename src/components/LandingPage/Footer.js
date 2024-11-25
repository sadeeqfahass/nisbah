import React from "react";

function Footer() {
  return (
    <div className="footer p-6 bg-[#5c0c0c]">
      <p className="text-center">
        Powered by
        {"  "} 
        <a href="https://mmt-ng.com/" target="_blank" className="italic">
          {" "}
          Mastermind Tech
        </a> {" "}
        &copy; All rights reserved
      </p>
    </div>
  );
}

export default Footer;
