const jwt = require("jsonwebtoken");

const checkToken= (req, res, next) => {
    console.log("Token cheking .....");
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          res.status(400).json({error_message:"Invalid Token..."});         
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(400).json({
        error_message: "Access Denied! Unauthorized User"
      });
     
    }
  }

  module.exports={
    checkToken
  };