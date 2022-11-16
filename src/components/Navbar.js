import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function Navbar({ navBgColor1, navTextColor1, border }) {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [color, setColor] = useState(navBgColor1);
  const [textColor, setTextColor] = useState(navTextColor1);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
          <Link to="/">
            <h1 style={{ color: `${textColor}` }} className="hoverEffect pr-4">
              Home
            </h1>
          </Link>
          <Link to="/scores">
            <h1 style={{ color: `${textColor}` }} className="hoverEffect pr-4">
              Risk Scores
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
            <h1 style={{ color: `${textColor}` }} className="hoverEffect pr-4">
              Research
            </h1>
          </Link>
          <a
            href="https://documentation.xerberus.io/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 style={{ color: `${textColor}` }} className="hoverEffect">
              Docs
            </h1>
          </a>
          {!user && (
            <div>
              {/* <Link to="/login">
                <h1
                  style={{ color: `${textColor}` }}
                  className="p-2 rounded ml-4 border shadow-md hover:shadow-lg hover:mb-1"
                >
                  Log in
                </h1>
              </Link> */}
              <Link to="/log">
                <FaUserCircle
                  style={{ color: `${textColor}` }}
                  size={30}
                  className="ml-4 "
                />
              </Link>
            </div>
          )}
          {/* {!user && (
            <div>
              <Link to="/signup">
                <h1
                  style={{ color: `${textColor}` }}
                  className="p-2 rounded ml-4 border shadow-md hover:shadow-lg hover:mb-1"
                >
                  Sign up
                </h1>
              </Link>
            </div>
          )}{" "} */}

          {user && (
            <div
              style={{ color: `${textColor}` }}
              className="p-2 rounded ml-4 border shadow-md hover:shadow-lg hover:mb-1"
            >
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
        </div>

        {/* mobile version */}

        <div
          className={
            click
              ? "fixed top-0 right-0 flex flex-col bg-white justify-center items-center w-[100vw] h-[100vh] text-center z-50 nav-effect border"
              : "fixed -right-[100%] top-0 flex flex-col bg-white justify-center items-center w-[100vw] h-[100vh] text-center z-50 nav-effect border"
          }
        >
          {!user && (
            <div className="flex flex-col">
              <Link to="/log">
                <h1
                  style={{ color: "#000" }}
                  className="p-2 rounded mb-4 border shadow-lg text-2xl"
                >
                  Log in
                </h1>
              </Link>
              {/* <Link to="/signup">
                <h1
                  style={{ color: "#000" }}
                  className="p-2 rounded mb-4 border shadow-lg text-2xl"
                >
                  Sign up
                </h1>
              </Link> */}
            </div>
          )}
          {user && (
            <div
              style={{ color: "#000" }}
              className="p-2 rounded mb-4 border shadow-lg text-2xl"
            >
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
          <Link to="/">
            <h1 style={{ color: "#000" }} className="p-4 text-2xl">
              Home
            </h1>
          </Link>
          <Link to="/scores">
            <h1 style={{ color: "#000" }} className="p-4 text-2xl">
              Risk Scores
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
            <h1 style={{ color: "#000" }} className="p-4 text-2xl">
              Docs
            </h1>
          </a>
        </div>
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
