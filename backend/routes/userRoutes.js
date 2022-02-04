const express = require("express");
const router = express.Router();
const {
  addHistory,
  removeFromHistory,
  getHistory,
  addReview,
  getDietRest,
  dietRestriction,
  favCuisine,
  getFavCuisine,
  nonFavCuisine,
  getNonFavCuisine,
  favLocation,
  favEstab,
  blacklist,
  getBlacklist,
} = require("../controllers/userSetting");

router.post("/history/addhistory", addHistory);
router.post("/history/removefromhistory", removeFromHistory);
router.get("/history/gethistory/:id", getHistory);
router.post("/history/addreview", addReview);

router.post("/user/getdietrestriction", getDietRest);
router.post("/user/dietrestriction", dietResriction);

router.post("/user/favcuisine", favCuisine);
router.get("/user/getfavcuisine/:id", getFavCuisine);
router.post("/user/nonfavcuisine", nonFavCuisine);
router.get("/user/getnonfavcuisine/:id", getNonFavCuisine);

router.post("/user/favlocation", favLocation);
router.get("/user/favestab/:id", favEstab);

router.post("/user/blacklist", blacklist);
router.get("/user/getblacklist/:id", getBlacklist);

module.exports = router;
