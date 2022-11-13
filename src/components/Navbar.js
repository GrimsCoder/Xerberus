import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar({ navBgColor1, navTextColor1, border }) {
  const [color, setColor] = useState(navBgColor1);
  const [textColor, setTextColor] = useState(navTextColor1);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000");
      } else {
        setColor(navBgColor1);
        setTextColor(navTextColor1);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, [navBgColor1, navTextColor1]);

  return (
    <div style={{ backgroundColor: `${color}` }} className={border}>
      <div className="flex justify-between items-center p-3 text-white">
        <div className="flex justify-start items-center">
          <div className="w-[15%] h-[15%] sm:w-[50%] sm:h-[50%] mr-4 z-50">
            <img
              src="/logoV2BG.png"
              alt="/"
              layout="responsive"
              width="50"
              height="50"
            />
          </div>
          <div className="z-50">
            <Link to="/">
              <h1
                style={click ? { color: `#000` } : { color: `${textColor}` }}
                className="font-bold tx-2xl sm:text-4xl leading-none"
              >
                Xer<span style={{ color: "#ff0000" }}>berus</span>.io
              </h1>
            </Link>
          </div>
        </div>

        {/* Desktop Version */}

        <div className="hidden md:flex items-center mr-5 z-50">
          <Link to="/scores">
            <h1
              style={{ color: `${textColor}` }}
              className="p-2 font-bold mr-4 border shadow-lg hover:mb-1"
            >
              Risk Scores
            </h1>
          </Link>
          <Link to="/">
            <h1
              style={{ color: `${textColor}` }}
              className="hoverEffect pr-4 hover:mb-1"
            >
              Home
            </h1>
          </Link>
          {/* <Link to="/ispo">
            <h1 style={{ color: `${textColor}` }} className="pr-4 hover:mb-1">
              ISPO
            </h1>
          </Link> */}
          {/* <Link to="/roadmap">
            <h1
              style={{ color: `${textColor}` }}
              className="hoverEffect pr-4 hover:mb-1"
            >
              Roadmap
            </h1>
          </Link> */}
          <Link to="/research">
            <h1
              style={{ color: `${textColor}` }}
              className="hoverEffect pr-4 hover:mb-1"
            >
              Research
            </h1>
          </Link>
          <a
            href="https://documentation.xerberus.io/"
            target="_blank"
            rel="noreferrer"
          >
            <h1
              style={{ color: `${textColor}` }}
              className="hoverEffect hover:mb-1"
            >
              Docs
            </h1>
          </a>
        </div>

        {/* mobile version */}

        {click ? (
          <div
            className={
              click
                ? "fixed top-0 right-0 flex flex-col bg-white justify-center items-center w-[100vw] h-[100vh] text-center z-50 nav-effect border"
                : "fixed -right-[100%] top-0 flex flex-col bg-white justify-center items-center w-[100vw] h-[100vh] text-center z-50 nav-effect border"
            }
          >
            <Link to="/scores">
              <h1
                style={{ color: "#000" }}
                className="p-4 text-2xl font-bold border shadow-lg"
              >
                Risk Scores
              </h1>
            </Link>
            <Link to="/">
              <h1 style={{ color: "#000" }} className="p-4 text-2xl">
                Home
              </h1>
            </Link>
            {/* <Link to="/roadmap">
            <h1 style={{ color: "#000" }} className="p-4 text-2xl">
              Roadmap
            </h1>
          </Link> */}
            {/* <Link to="/ispo">
            <h1 style={{ color: "#000" }} className="p-4 text-2xl">
              Ispo
            </h1>
          </Link> */}
            <Link to="/research">
              <h1 style={{ color: "#000" }} className="p-4 text-2xl">
                Research
              </h1>
            </Link>
            <a
              href="https://documentation.xerberus.io/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 style={{ color: `${textColor}` }} className="p-4 text-2xl">
                Docs
              </h1>
            </a>
          </div>
        ) : (
          ""
        )}

        <div
          className="flex md:hidden cursor-pointer z-50"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
