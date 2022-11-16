import React, { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [stake, setStake] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addresses, setAddresses] = useState([]);
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const url = "https://backend.xerberus.io/api/v1/data/";
  // const url = "http://localhost:3006/api/v1/data/";

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(`${url}addr`);
      setAddresses(response.data[0].Addresses);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    if (addresses.includes(stake)) {
      e.preventDefault();
      await signup(stake, email, password);
      navigate("/scores");
    } else {
      window.alert("Invalid Staking Address");
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col p-10 w-[75%] md:w-[40vw] bg-white border-4 items-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-5">Stake Pool Deal</h3>
        <div className="flex flex-col items-start">
          <h2 className="text-center w-full text-xl md:text-2xl mb-10 ">
            Stake at our Stake Pool -{" "}
            <span className="font-bold" style={{ color: "#ff0000" }}>
              XEROG
            </span>{" "}
            - to be able to sign up
          </h2>

          <ol>
            <li className="mb-2 text-lg text-justify md:text-start md:text-xl">
              Access to the advanced Xerberus{" "}
              <span style={{ color: "#ff0000" }}>dashboard </span>. We will add
              more features in the current weeks and months
            </li>
            <li className="mb-2 text-lg text-justify md:text-xl">
              Become eligible for future{" "}
              <span style={{ color: "#ff0000" }}>airdrops </span> of the
              Xerberus token.
            </li>
            <li className="mb-2 text-lg text-justify md:text-xl">
              Become a member of our{" "}
              <span style={{ color: "#ff0000" }}>special discord channel</span>{" "}
              where you can ask questions and make your feedback and features
              wishes heard.
            </li>
          </ol>
          <p className="w-full text-center pt-10">
            Read the{" "}
            <span className="font-bold underline">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docsend.com/view/kw5uizzscsh36sqj"
              >
                Whitepaper
              </a>
            </span>{" "}
            to learn more about the Xerberus Protocol.{" "}
          </p>
        </div>
      </div>
      <div className="w-screen md:w-[40vw]">
        <form
          className="md:w-[30vw] m-auto p-20 md:py-0 md:px-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl md:text-5xl  font-bold text-center">
            SIGN <span style={{ color: "#ff0000" }}>UP</span>
          </h2>
          <label htmlFor="stake" className="sr-only">
            stake
          </label>
          <input
            onChange={(e) => setStake(e.target.value)}
            type="text"
            placeholder="Enter your wallet address staking with Xerberus"
            className="border shadow-lg p-3 w-full my-6"
            value={stake}
            required
          />
          <label className="sr-only">Email address:</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border shadow-lg p-3 w-full my-6"
            value={email}
            required
          />
          <label className="sr-only">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
            className="border shadow-lg p-3 w-full my-6"
          />
          <button
            disabled={isLoading}
            className="border shadow-lg hover:shadow-xl hover:-translate-y-0.5 p-3 w-full my-6"
          >
            Sign up
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
