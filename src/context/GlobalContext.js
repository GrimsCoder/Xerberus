import React, { useRef } from "react";

const GlobalContext = React.createContext();

function GlobalContextProvider(props) {
  const refs0 = useRef(null);
  const refs1 = useRef(null);
  const refs2 = useRef(null);
  const refs3 = useRef(null);

  const handleScroll = (ref) => {
    const yOffset = -90;
    const element = ref.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      behavior: "smooth",

      top: y,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ refs0, refs1, refs2, refs3, handleScroll }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, GlobalContext };
