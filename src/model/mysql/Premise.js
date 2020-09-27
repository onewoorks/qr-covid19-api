const mysql = require('../config/mysql.js')
const moment = require('moment')
const { v4: uuidv4 } = require('uuid')

const premise = (premise) => {
    this.premise = premise
    this.date_created = moment().format().slice(0, 19).replace('T', '')
}

premise.get_info = (uuid, result) => {
    let query = ''
    query = 'SELECT * FROM premise WHERE uuid=? '
    mysql.query(query, [uuid], (err, res) => {
        if (err) {
            result(err)
        } else {
            result(null, res[0])
        }
    })
}

premise.get_linked = (id, result) => {
    let query =
        'SELECT cawangan_induk, uuid FROM premise WHERE premise_linked=?'
    mysql.query(query, [id], (err, res) => {
        if (err) result(err)
        result(null, res)
    })
}

premise.get_all = (induk, result) => {
    let query = "SELECT * FROM premise WHERE cawangan_induk = ? "
    mysql.query(query,[induk], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

premise.create_premise = (form, result) => {
    let query = 'INSERT INTO premise (datetime, nama_cawangan, alamat, no_telefon, uuid, image, cawangan_induk) VALUE (now(), ?,?,?,?,?,?)'
    mysql.query(
        query,
        [
            form.nama_cawangan,
            form.alamat,
            form.no_telefon,
            uuidv4(),
            form.image,
            form.cawangan_induk
        ],
        (err, res) => {
            if (err) result(err)
            result(null, res)
        }
    )
}

premise.ubah_premise = (form, result) => {
    let query = "UPDATE premise SET nama_cawangan=?, alamat=?, no_telefon=? WHERE uuid=?"
    mysql.query(query,
        [
            form.nama_cawangan,
            form.alamat,
            form.no_telefon,
            form.uuid
        ], (err, res) => {
            if(err) result(err)
            result(null,res)
        })
}


module.exports = premise
