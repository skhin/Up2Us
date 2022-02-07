import React, { useState } from "react";
import "./Reservation.css";
import { useHistory } from "react-router-dom";
import historyServ from "../../../service/userSetting";

const Reservation = ({ restaurant, quesAns }) => {
  const [isCancel, setIsCancel] = useState(false);
  const history = useHistory();

  const handleCancel = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await historyServ.removeFromHistory({
        userId: user._id,
        restId: restaurant._id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsCancel(true);
    }
  };

  return (
    <div className="reservation container">
      <div className="title">
        <h1>RESERVATION</h1>
      </div>

      <div className="reser_container">
        <div>
          <h1>{isCancel ? "Cancel" : "Success"}</h1>
          <br />
          {isCancel ? (
            <p className="res-status">
              Your reservation has been cancelled at {restaurant.name}.
            </p>
          ) : (
            <p className="res-status">
              Your reservation has been confirmed at {restaurant.name}.
              <br />
              Please arrive 10min before the scheduled time
            </p>
          )}
          <br />
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>
            <strong>Time: </strong> {quesAns.time}
          </p>
          <p>
            <strong>Total Pax: </strong> {quesAns.totalPax}
          </p>
          <br />
          {isCancel ? (
            <span
              style={{ color: "#1890ff", cursor: "pointer" }}
              onClick={() => history.push("/question")}
            >
              Try Again
            </span>
          ) : (
            <p>
              Should you wish to cancel your reservation, please{" "}
              <span
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={handleCancel}
              >
                click here
              </span>{" "}
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
