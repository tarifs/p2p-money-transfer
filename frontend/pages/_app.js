import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/main.scss";
import MasterLayout from "../components/layouts/MasterLayout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PreLoader from "../components/partials/PreLoader";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  return (
    <MasterLayout>
      {loading ? <PreLoader /> : <Component {...pageProps} />}
    </MasterLayout>
  );
}

export default MyApp;
