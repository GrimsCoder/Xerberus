import React, { useEffect, useState } from "react";
import axios from "axios";

import emailjs from "@emailjs/browser";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [email, setEmail] = useState("");
  const [tokens, setTokens] = useState([]);

  const url = "https://backend.xerberus.io/api/v1/data/";

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${url}score?label=RiskScore`);
      setScores(response.data.scores);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(tokens);

    axios({
      method: "post",
      url: url,
      data: {
        email: email,
        tokens: tokens,
      },
    });

    const target = e.target;
    emailjs
      .sendForm(
        "service_why93i4",
        "template_4shtaxf",
        target,
        "unMwOkUlAaPG26ez3"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative max-w-[1240px] bg-white m-auto p-4 mb-20">
      {submitted && (
        <div className="overlay">
          <p className="text-red-100 text-center shadow-lg bg-white text-5xl sm:text-7xl -rotate-12">
            XERBERUS IS NOW WATCHING
          </p>
        </div>
      )}
      <h1 className="text-2xl lg:text-3xl font-bold text-center p-4 uppercase">
        Token Risk <span style={{ color: "#ff0000" }}>Alerts</span> - Alpha
      </h1>
      <p className="text-center mb-10">
        If you want to get an alert when your favorite project changes
        significantly, sign up for our risk alerts below.
      </p>
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only ">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          name="usermail"
          placeholder="Email"
          className="border shadow-lg p-3 w-full my-6"
          required
        />
        <div className="mt-6 flex justify-center">
          <input
            type="checkbox"
            onChange={() => {
              setSelectAll(!selectAll);
              selectAll ? setTokens(() => []) : setTokens(() => ["ALL"]);
            }}
          />
          &nbsp;SELECT ALL
        </div>
        <div className="flex flex-wrap mb-6 sm:pl-12 space-x-4 space-y-4 justify-center sm:justify-start">
          <div></div>
          {scores
            .sort((a, b) =>
              a.token.localeCompare(b.token.toString(), "en", {
                numeric: true,
              })
            )
            .map((asset) => (
              <div
                key={asset.token}
                className="w-[50%] sm:w-[30%] flex items-center"
              >
                {selectAll ? (
                  <input
                    onChange={() =>
                      !tokens.includes(asset.token)
                        ? setTokens((prevArray) => [...prevArray, asset.token])
                        : setTokens((prevArray) =>
                            prevArray.filter((t) => t !== asset.token)
                          )
                    }
                    type="checkbox"
                    className="mx-2"
                    checked
                  />
                ) : (
                  <input
                    onChange={() =>
                      !tokens.includes(asset.token)
                        ? setTokens((prevArray) => [...prevArray, asset.token])
                        : setTokens((prevArray) =>
                            prevArray.filter((t) => t !== asset.token)
                          )
                    }
                    type="checkbox"
                    className="mx-2"
                  />
                )}

                <div className="w-[100%] sm:w-[70%] flex items-center justify-between">
                  {asset.token}
                  <img
                    className="mx-1.5 mb-1 rounded-full"
                    src={asset.logo}
                    width="30"
                    height="30"
                    alt=""
                  ></img>
                </div>
              </div>
            ))}
        </div>
        {submitted ? (
          <button className="border bg-blue-100 p-3 w-full my-6">
            Submitted
          </button>
        ) : (
          <button className="border shadow-lg hover:shadow-xl hover:-translate-y-0.5 p-3 w-full my-6">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
