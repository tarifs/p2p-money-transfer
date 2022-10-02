import UserLayout from "../../components/layouts/UserLayout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../service/AppUrl";
import Api from "../../service/Api";
import AuthenticatedRoute from "../../components/AuthenticatedRoute";
import PreLoader from "../../components/partials/PreLoader";
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [dashboard, setDashboard] = useState([]);

  useEffect(async () => {
    setLoading(true);
    await axios
      .post(AppUrl.dashboard, [], { headers: Api.getHeaders() })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setDashboard(res.data);
        }
      });
  }, []);

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
        <>
          <h1>
            Most conversion user name is{" "}
            <b>{dashboard?.most_conversion_user?.name}</b>
          </h1>
          <h4>
            Total received amount <b>{dashboard?.total_received_amount}</b>{" "}
            {dashboard?.currency?.toUpperCase()}
          </h4>
          <hr />
          <Row md={2} className="g-4">
            <Col>
              <Card body>
                The total converted amount{" "}
                <h4>
                  {dashboard?.total_converted_amount}{" "}
                  {dashboard?.currency?.toUpperCase()}
                </h4>
              </Card>
            </Col>
            <Col>
              <Card body>
                Third highest amount of transactions{" "}
                <h4>
                  {dashboard?.third_max_transaction}{" "}
                  {dashboard?.currency?.toUpperCase()}
                </h4>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </UserLayout>
  );
};

export default AuthenticatedRoute(Dashboard);
