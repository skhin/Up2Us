import React, { useEffect, useState } from "react";
import "./VisitedLocations.css";
import { Input, Button, message } from "antd";
import historyServ from "../../service/userSetting";
import Loader from "../../components/Loader/Loader";
import { StarFilled, CloseOutlined } from "@ant-design/icons";

const VisitedLocations = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userHistory, setUserHistory] = useState([]);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // MAKING API CALL TO GET VISITED LOCATION HISTORY
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await historyServ.getHistory(user._id);
        setUserHistory(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, [user._id]);

  // MAKING API CALL TO SUBMIT REVIEW
  const submitReview = async (restId) => {
    if (!review) {
      message.success("Please enter your review!");
      return false;
    }
    try {
      await historyServ.addReview({
        restId,
        review,
      });
      message.success("Your review has been added");
    } catch (error) {
      console.log(error);
    }
  };

  // MAKING API CALL TO ADD TO FAV ESTABLISHMENT
  const addToFavLocation = async (item) => {
    try {
      await historyServ.favLocation({
        userId: user._id,
        favLoc: {
          loc: item.name,
          add: item.address,
        },
      });
      message.success("Added to Favourite Establishment");
    } catch (error) {
      console.log(error);
    }
  };

  // MAKING API CALL TO ADD TO BLACKLIST
  const addToBlacklist = async (item) => {
    try {
      await historyServ.blacklist({
        userId: user._id,
        favLoc: {
          loc: item.name,
          add: item.address,
        },
      });
      message.success("Added to Blacklist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user_setting container">
      <div className="title">
        <h1>{user.userName} Profile Page - Visited Locations</h1>
      </div>
      <div className="locationWrap">
        {isLoading ? (
          <Loader />
        ) : (
          userHistory.reverse().map((item) => (
            <div key={item.restId} className="location">
              <h1>{item.name}</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "25px",
                }}
              >
                <div
                  style={{ color: "yellow", cursor: "pointer" }}
                  onClick={() => addToFavLocation(item)}
                >
                  <StarFilled />
                </div>
                <div
                  style={{ color: "tomato", cursor: "pointer" }}
                  onClick={() => addToBlacklist(item)}
                >
                  <CloseOutlined />
                </div>
              </div>
              <Input.TextArea
                onChange={(e) => setReview(e.target.value)}
                placeholder="Add Review"
              />
              <br />
              <br />
              <Button type="primary" onClick={() => submitReview(item.restId)}>
                Submit
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default VisitedLocations;
