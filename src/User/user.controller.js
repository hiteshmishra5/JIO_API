const pool = require("../../db");
const sqlqry = require("../Patients/sqlQuery");
const bcrypt = require('bcrypt');
const valdate = require("./user.service");
const { sign } = require("jsonwebtoken");
require('dotenv').config();


const getUsers = (req, res) => {
  pool.query(sqlqry.getAllUserDetails, (Err, userResult) => {
    if (Err) {
      res.status(400).json(Err.message);
    }
    res.status(200).json(userResult.rows);

  })
}


const createUser = (req, res) => {
  const { userid, username, password, email, mobile, address, address1, city, state, pin, registrationtypeid,
    fullname, gender, mpin, isactive } = req.body;
  const { error } = valdate.schema.validate({ userid: userid, password: password, email: email });
  if (error) {
    res.status(400).json({ error_message: error });
  }

  const salt = bcrypt.genSaltSync(10);
  const hasedpwd = bcrypt.hashSync(password, salt);
  pool.query(sqlqry.addUser, [userid, username, hasedpwd, email, mobile, address, address1, city, state, pin, registrationtypeid, fullname,
    gender, mpin, isactive], ((Err, userResult) => {
      if (Err) {
        res.status(400).json({ error_message: Err.message });
      }
      res.status(200).json({ message: "user added" });
    })
  )

}

const login = (req, res) => {
  const body = req.body;
  console.log(process.env.JWT_KEY);
  valdate.getUserByUserEmail(body.email, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error_message: err.message });
    }

    if (!results) {
      res.status(400).json({ error_message: "Invalid email or password" });
    }

    const pwd = results.rows[0].password;
    console.log(pwd);
    if (pwd != null) {
      const result = bcrypt.compareSync(body.password, pwd);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: "1h"
        });
        return res.status(200).json({
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.status(400).json({
          error_message: "Invalid email or password"
        });
      }
    }
    else {
      return res.status(400).json({
        error_message: "Password null"
      });
    }

  });
}

module.exports = {
  getUsers, createUser, login
}