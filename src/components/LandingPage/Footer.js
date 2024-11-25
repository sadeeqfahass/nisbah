import React from "react";

function Footer() {
  return (
    <div className="footer flex items-center content-center p-8 bg-[#5c0c0c]">
      <p>
        Powered by
        <a href="https://mmt-ng.com/" className="italic underline">
          {" "}
          Mastermind Tech
        </a>{" "}
        &copy; All rights reserved
      </p>
    </div>
  );
}

export default Footer;
