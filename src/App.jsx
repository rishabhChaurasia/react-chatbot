import React, { useEffect } from "react";
import AuthenticatedUserOnly from "./components/AuthenticatedUserOnly";
import { Navigate, Route, Routes } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { authUser } = useSelector((state) => state.auth);
  const { themeMode } = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.style.backgroundColor =
      themeMode === "dark" ? "#2b2c33" : "#fff";
    document.body.style.color = themeMode === "dark" ? "#fff" : "#000";
  }, [themeMode]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? <AuthenticatedUserOnly /> : <Navigate to={"/auth"} />
          }
        />
        <Route
          path="/auth"
          element={authUser ? <Navigate to={"/"} /> : <GoogleAuth />}
        />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        pauseOnFocusLoss
        draggable
        theme="colored"
        stacked
      />
    </>
  );
}

export default App;
