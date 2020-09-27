
const PremiseModel = require('../model/mysql/Premise.js')

exports.get_info = (uuid, result) => {
    console.log('inn')
     PremiseModel.get_info(uuid, (err, res) => {
        if(err){
            result(err)
        } else {
            result(null,res)
        }
    })
}

exports.create_premise = (payloads, result) => {
    PremiseModel.create_premise(payloads, (err, res)=>{
        if(err)
            result(err)
        result(null, res)
    })
}

exports.get_all = (induk, result) => {
    PremiseModel.get_all(induk, (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

exports.ubah_premise = (payloads, result) => {
    PremiseModel.ubah_premise(payloads, (err, res)=>{
        if(err)
            result(err)
        result(null, res)
    })
}