const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verification = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({ error: "Authorization token required. You are not logged in!" });
  } else {
    const token = authorization.split(" ")[1];
    try {
      const { _id } = jwt.verify(token, process.env.SECRETKEY);
      req.user = await User.findOne({ _id }).select("_id");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Request not Authorized" });
    }
  }
};
module.exports = verification