import React from "react";
import "./DietPreference.css";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";

const DietPreference = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  return (
    <div className="dietPref container">
      <div className="title">
        <h1>{user.userName} settings- DIETARY RESTRICTIONS & PREFERENCES</h1>
      </div>

      <Row justify="center">
        <Col xs={2} sm={4} md={6} lg={8} xl={4} className="diet_card">
          <h1>
            Dietary <br /> Restriction
          </h1>
          <Button onClick={() => history.push("/dietryrestriction")}>
            Get Started
          </Button>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={4} className="diet_card">
          <h1>
            Favourite <br /> Cuisine
          </h1>
          <Button onClick={() => history.push("/favcuisine")}>
            Get Started
          </Button>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={4} className="diet_card">
          <h1>
            Non-Favourite <br /> Cuisine
          </h1>
          <Button onClick={() => history.push("/nonfavcuisine")}>
            Get Started
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default DietPreference;
