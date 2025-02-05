import React from "react";
import { getLocalStorage, setLocalStorage } from "../Utils.jsx/Localstorage";

const Authcontext = ({ children }) => {
  // useEffect(() => {
  // getLocalStorage()
  // setLocalStorage()
  //   }
  // )

  return <div>{children}</div>;
};

export default Authcontext;
