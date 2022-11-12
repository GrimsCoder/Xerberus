import React from "react";

function Info() {
  return (
    <div className="flex flex-col items-center justify-center  m-10 lg:m-20 py-10">
      <h2 className="text-2xl lg:text-3xl font-bold uppercase text-center">
        Stay true to the <span style={{ color: "#ff0000" }}>origin</span> of
        Crypto
      </h2>
      <p className="md:text-xl text-center py-10 w-[75vw]">
        Xerberus is a decentralized risk rating organization using advanced
        mathematics.
        <br />
        <br />
        Xerberus stays true to the original values of crypto: Standing up
        for&nbsp;
        <span style={{ fontWeight: "bold" }}>
          radical transparency
        </span> and <span style={{ fontWeight: "bold" }}>accountability</span>.{" "}
        <br />
        Only by creating an objective understanding of the essence of our
        industry can we fulfill the promise of financial emancipation and
        freedom.
      </p>
      <h2 className="text-2xl lg:text-3xl font-bold uppercase mt-5 text-center">
        Understand Your <span style={{ color: "#ff0000" }}>Token</span> Risk!
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">Token Risk</h3>
          <p className="">
            All tokens have risk, which is often hard to understand and
            quantify. Xerberus helps you and provides a comprehensive tool to
            explore the risk associated with your favorite token!
          </p>
        </div>
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">What is risk?</h3>
          <p className="">
            In short, financial risk is the chance that you lose money.
            Everything can influence the risk of your favorite tokens: From
            disagreements within the core team over smart contract bugs to
            actual market adoption of the product.
          </p>
        </div>
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">
            How do we understand risk?
          </h3>
          <p>
            Xerberus uses a mathematical model that combines on-chain
            information such as velocity and ownership patterns with off-chain
            data sources to create an all-encompassing insight into the nature
            of a project that goes beyond what is available to the public.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
