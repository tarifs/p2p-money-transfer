import React from "react";
import AppUrl from "../../service/AppUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Api from "../../service/Api";
import AppStorage from "../../service/AppStorage";

const Logout = ({ afterLogout }) => {
  const router = useRouter();

  const onLogout = () => {
    afterLogout();
    axios
      .post(AppUrl.logout, {}, { headers: Api.getHeaders() })
      .then((res) => {
        if (res.status === 200 && res.data.status === "success") {
          AppStorage.clearUser();
          router.push("/");
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavDropdown.Item onClick={onLogout}>
        <a href="#">Logout</a>
      </NavDropdown.Item>
    </>
  );
};

export default Logout;
