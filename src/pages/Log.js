import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Footer from "../components/Footer";
import { useState } from "react";

function Log() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <>
      <Navbar
        navBgColor1={"#fff"}
        navTextColor1={"#000"}
        border={" fixed left-0 top-0 w-full z-10 ease-in duration-300"}
      />
      {toggle ? (
        <div className="flex flex-col items-center  my-[20vh]">
          <Signup />
          <p className="w-full text-center  mt-5">
            Already signed up?{" "}
            <button className="font-bold underline" onClick={handleToggle}>
              Login
            </button>{" "}
            here
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center  my-[20vh]">
          <Login />
          <p className="w-full text-center">
            Not signed up yet?{" "}
            <button className="font-bold underline" onClick={handleToggle}>
              Sign up
            </button>{" "}
            here
          </p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Log;
