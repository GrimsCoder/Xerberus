import React from "react";
import { SiDiscord, SiLinkedin, SiTwitter, SiMedium } from "react-icons/si";

function Footer() {
  return (
    <div className="relative flex flex-col md:flex-row p-5 border-t-[1px] text-sm text-center justify-between items-center z-50 bg-white">
      <div className="flex mb-5 md:mb-0">
        <div className="">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/pENmUnABrS"
          >
            <SiDiscord size={30} className="mr-5 hover:text-red-500" />
          </a>
        </div>
        <div className="">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Xerberus_io"
          >
            <SiTwitter size={30} className="mr-5 hover:text-red-500" />
          </a>
        </div>
        <div className="">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/xerberus-labs/"
          >
            <SiLinkedin size={30} className="mr-5 hover:text-red-500" />
          </a>
        </div>
        <div className="">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@xerberus"
          >
            <SiMedium size={30} className="mr-5 hover:text-red-500" />
          </a>
        </div>
      </div>
      <p>@Xerberus Labs. All rights reserved. 2022.</p>
    </div>
  );
}

export default Footer;
