import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/scores");
  };
  return (
    <div className="flex items-center justify-center">
      <form
        className="w-[65vw] md:w-[25vw] m-auto py-20"
        onSubmit={handleLogin}
      >
        <h2 className=" text-2xl md:text-5xl font-bold text-center">
          LOG <span style={{ color: "#ff0000" }}>IN</span>
        </h2>
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
          Log in
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
