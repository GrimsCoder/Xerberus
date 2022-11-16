import React from "react";

function Maintenance() {
  return (
    <>
      <div className="w-screen h-screen relative z-10 bg-black overflow-hidden">
        <iframe
          src="https://giphy.com/embed/xT5LME7zAmggkkK7n2"
          title="Cerberus heads arguing in the dark"
          width="100%"
          height="100%"
          className="absolute"
          frameBorder="0"
        ></iframe>
        <div className="absolute flex items-center justify-center w-screen h-screen z-20 bg-transparent">
          <div className="glass">
            <h1 className="md:text-3xl">
              Xerberus<span className="text-red-500">.io</span> is leveling up
              big time and awesome stuff is coming very soon.
            </h1>
            <p className="md:text-3xl ">
              Under maintenance from the 14th of Nov. 2022 to
              <span className="font-bold text-red-500">
                {" "}
                the 16th of Nov. 2022
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maintenance;
