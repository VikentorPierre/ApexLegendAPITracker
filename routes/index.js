const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//@method: GET "/api/v1/profile/:platform/:gamertag" take 2 arg
//@description: " this route makes a call to the tracker api with our api key and get the data"
//@access:public
router.get("/:platform/:gamertag", async (req, res, next) => {
  // try catch our api request
  try {
    // add our api key to the request header
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY
    };
    const { platform, gamertag } = req.params;
    // make the request and store data into response variable
    const response = await fetch(
      `${process.env.TRACKER_API_BASE_URL}/profile/${platform}/${gamertag}`,
      {
        headers
      }
    );
    // turn our return api data into json
    const data = await response.json();

    // check if we got any data our error
    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: "Profile Not Found"
      });
    }
    // send data to front end
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = router;
