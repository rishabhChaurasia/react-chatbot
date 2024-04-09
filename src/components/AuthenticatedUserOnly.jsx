import React from "react";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";

function AuthenticatedUserOnly() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default AuthenticatedUserOnly;
