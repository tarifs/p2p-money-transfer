import UserLayout from "../../components/layouts/UserLayout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../service/AppUrl";
import Api from "../../service/Api";
import { toast } from "react-toastify";
import AuthenticatedRoute from "../../components/AuthenticatedRoute";
import AppStorage from "../../service/AppStorage";
import PreLoader from "../../components/partials/PreLoader";

const SentMoney = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [processing, setProcessing] = useState(false);
  const initialState = {
    amount: "",
    receiver_id: "",
    sender_id: "",
  };
  const [data, setData] = useState(initialState);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    const getUser = AppStorage.getUser();
    if (getUser) {
      setLoading(false);
      setUser(getUser);
      setData({ ...data, sender_id: getUser.id });
    }
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData("text"));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setProcessing(true);
    await axios
      .post(AppUrl.sendMoney, data, { headers: Api.getHeaders() })
      .then((res) => {
        if (res.data && res.data.status === "success") {
          document.getElementById("form").reset();
          document.getElementById("receiver_id").value = "";
          toast.success(res.data.message);
          setProcessing(false);
          setErrors("");
        } else if (res.data && res.data.status === "error") {
          document.getElementById("form").reset();
          document.getElementById("receiver_id").value = "";
          toast.error(res.data.message);
          setProcessing(false);
        }
      })
      .catch((error) => {
        setProcessing(false);
        setErrors(error.response.data.errors);
      });
  };
  const styles = {
    background: "#fafafa",
    borderRadius: "5px",
    padding: "20px",
  };
  return (
    <UserLayout style={styles}>
      <Head>
        <title>Sent Money</title>
      </Head>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="form-submit">
          <div className="d-flex justify-content-between align-items-baseline">
            <h4 className="section-title">
              My Currency {user && user.currency}
            </h4>
          </div>
          <hr />
          <div className="submit-section mt-3">
            <form onSubmit={submitHandler} id="form" className="form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Amount</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="form-control"
                    placeholder="Enter amount"
                    onChange={changeHandler}
                    onPaste={preventPasteNegative}
                    onKeyPress={preventMinus}
                    min="1"
                    required
                  />
                  {errors && errors.amount ? (
                    <h5 className="text-danger mt-2">{errors.amount[0]}</h5>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label>User</label>
                  <select
                    id="receiver_id"
                    name="receiver_id"
                    className="form-control"
                    required
                    onChange={changeHandler}
                  >
                    <option value="" selected disabled>
                      Choose user
                    </option>
                    {user && user.currency == "usd" ? (
                      <option value="2">Doe</option>
                    ) : (
                      <option value="1">Jhon</option>
                    )}
                  </select>
                </div>
                <div className="form-group col-md-6 mt-5">
                  <button
                    className="btn btn-primary shadow"
                    type="submit"
                    disabled={processing}
                  >
                    {processing ? (
                      <>
                        <i className="fa fa-spin fa-spinner mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>Submit</>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </UserLayout>
  );
};

export default AuthenticatedRoute(SentMoney);
