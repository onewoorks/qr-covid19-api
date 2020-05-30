
const PremiseModel = require('../model/mysql/Premise.js')

exports.get_info = (uuid, result) => {
    PremiseModel.get_info(uuid, (err, res) => {
        if(err){
            result(err)
        } else {
            result(null,res)
        }
    })
}