import React, { useEffect } from "react";
import TopNavBar from "../partials/TopNavBar";
import { ToastContainer } from "react-toastify";

function MasterLayout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, [children]);

  return (
    <>
      <TopNavBar />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MasterLayout;
