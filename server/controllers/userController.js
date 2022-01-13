//databse
const {db, query} = require("../database/index")
const {createToken} = require("../helper/createToken")
//hash
// const bcrypt = require("bcrypt")
// const saltRounds = 10;

module.exports =  {
    login: async (req, res) => {
        try {
            let {username , password} = req.body
            const loginQuery = await query(`SELECT * FROM login WHERE user=${db.escape(username)} and password=${db.escape(password)};`)
            //checking user
            if (loginQuery[0]) {
                delete loginQuery[0].password
                //Create Token
                let Token = createToken({ username });
                res.status(200).send({
                  message: "Login Success",
                  success: true,
                  token: Token,
                  dataUser: loginQuery[0],
                });
                return;
            } else {
              res.send({ message: "Wrong Password or Account Is Not Registered", success: false });
            }
          } catch (error) {
            console.log(error);
            res.status(500).send(error);
          }
    }
}