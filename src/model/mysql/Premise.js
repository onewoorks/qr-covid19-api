const mysql = require('../config/mysql.js')
const moment = require('moment')

const premise = (premise) => {
    this.premise = premise
    this.date_created = moment().format().slice(0,19).replace('T','')
}

premise.get_info = (uuid, result) => {
    let query = ""
    query = "SELECT * FROM premise WHERE uuid=? "
    mysql.query(query,[uuid], (err, res) => {
        if(err){
            result(err)
        } else {
            result(null, res[0])
        }
    })
}

module.exports = premise