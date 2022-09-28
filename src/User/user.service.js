const { json } = require('express');
const Joi = require('joi');
const pool =require("../../db");



const schema = Joi.object({
    userid:Joi.string().min(3).required(),
    email:Joi.string().min(4).required().email(),
    password:Joi.string().min(6).required()
});

const getUserByUserEmail=(email, callBack) => {
  console.log("Get user email");
    pool.query(
      "select * from external_project_user_master where email = $1",
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        //console.log(json(results.row));
        console.log(results);
        console.log(results.rows[0]);
        return callBack(null, results);
      }
    );
  }

  const getUserByUserId=(id, callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from project_user_master where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }

module.exports={schema,getUserByUserEmail}