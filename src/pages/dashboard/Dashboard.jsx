import React from "react";
import useLocalStorage from "react-use-localstorage";

const Dashboard = () => {
  const [token, setToken] = useLocalStorage("timestamp", "");

  return (
    <div>
      <h1>Soy la página Dashboard</h1>
      <h5>{token}</h5>
    </div>
  );
};

export default Dashboard;
