import React from "react";
import "./DiningHistory.css";
import { Row, Col } from "antd";
import historyImg from "../../assets/images/history.jpg";
import { useHistory } from "react-router-dom";

const DiningHistory = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  return (
    <div className="user_setting">
      <div className="title">
        <h1>{user.userName} settings - Dining history</h1>
      </div>
      <Row>
        <Col span={16}>
          <Row justify="center" gutter={[16, 16]}>
            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={13}
              onClick={() => history.push("/visitedlocation")}
              className="dining_history"
            >
              <h1>Visited Location</h1>
              <img src={historyImg} alt="history" />
            </Col>

            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={13}
              onClick={() => history.push("/favestab")}
              className="dinning_history"
            >
              <h1>Favroite Establishment</h1>
              <img src={historyImg} alt="history" />
            </Col>

            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={13}
              onClick={() => history.push("/blacklist")}
              className="dining_history"
            >
              <h1>Blacklist</h1>
              <img src={historyImg} alt="history" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DiningHistory;
