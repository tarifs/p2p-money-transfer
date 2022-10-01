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
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [processing, setProcessing] = useState(false);

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
        // <div className="form-submit">
        //   <div className="d-flex justify-content-between align-items-baseline">
        //     <h4 className="section-title">
        //       My Currency {user && user.currency}
        //     </h4>
        //   </div>
        //   <hr />
        //   <div className="submit-section mt-3">
        //     <form onSubmit={submitHandler} id="form" className="form">
        //       <div className="form-row">
        //         <div className="form-group col-md-6">
        //           <label>Amount</label>
        //           <input
        //             type="number"
        //             id="amount"
        //             name="amount"
        //             className="form-control"
        //             placeholder="Enter amount"
        //             onChange={changeHandler}
        //             onPaste={preventPasteNegative}
        //             onKeyPress={preventMinus}
        //             min="1"
        //             required
        //           />
        //           {errors && errors.amount ? (
        //             <h5 className="text-danger mt-2">{errors.amount[0]}</h5>
        //           ) : (
        //             ""
        //           )}
        //         </div>
        //         <div className="form-group col-md-6">
        //           <label>User</label>
        //           <select
        //             id="receiver_id"
        //             name="receiver_id"
        //             className="form-control"
        //             required
        //             onChange={changeHandler}
        //           >
        //             <option value="" selected disabled>
        //               Choose user
        //             </option>
        //             {user && user.currency == "usd" ? (
        //               <option value="2">Doe</option>
        //             ) : (
        //               <option value="1">Jhon</option>
        //             )}
        //           </select>
        //         </div>
        //         <div className="form-group col-md-6 mt-5">
        //           <button
        //             className="btn btn-primary shadow"
        //             type="submit"
        //             disabled={processing}
        //           >
        //             {processing ? (
        //               <>
        //                 <i className="fa fa-spin fa-spinner mr-2" />
        //                 Sending...
        //               </>
        //             ) : (
        //               <>Submit</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //     </form>
        //   </div>
        // </div>
        // <Card style={{ width: "18rem" }}>
        //   <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </Card.Text>
        //   </Card.Body>
        // </Card>
        <Row md={2} className="g-4">
          <Col>
            <Card body>This is some text within a card body.</Card>
          </Col>
          <Col>
            <Card body>This is some text within a card body.</Card>
          </Col>
        </Row>
      )}
    </UserLayout>
  );
};

export default AuthenticatedRoute(Dashboard);
