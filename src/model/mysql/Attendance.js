const mysql = require('../config/mysql.js')
const moment = require('moment')

const attendance = (attendance) => {
    this.attendance = attendance
    this.date_created = moment().format().slice(0, 19).replace('T', '')
}

attendance.create_attendance = (form, result) => {
    let query = ''
    query =
        'INSERT INTO attendance (datetime, attendee_payloads, cawangan) VALUE (now(), ?,?)'
    mysql.query(
        query,
        [JSON.stringify(form.attendance_info), form.cawangan],
        (err, res) => {
            if (err) result(err)
            result(null, res)
        }
    )
}

attendance.get_list_attendance = (filter_data, result) => {
    console.log(filter_data.uuid)
    let query = "SELECT * FROM attendance WHERE cawangan=? AND DATE(datetime) = ? "
    mysql.query(query, [filter_data.uuid.toString(), filter_data.tarikh], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

attendance.get_list_attendance_semua = (filter_data, result) => {
    let query = "SELECT a.*, p.nama_cawangan FROM attendance a "
    query += "LEFT JOIN premise p ON p.uuid = a.cawangan "
    query += "WHERE DATE(a.datetime) = ? "
    mysql.query(query, [filter_data.tarikh], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

attendance.get_date_grouping = (payloads, result) => {
    let query = "SELECT date(datetime) as the_date "
    query += "FROM attendance "
    query += "WHERE cawangan=? "
    query += "AND date(datetime) != DATE(now()) "
    query += "GROUP BY date(datetime) ORDER BY datetime DESC"
    mysql.query(query, [payloads.uuid], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

attendance.get_date_grouping_semua = (payloads, result) => {
    let query = "SELECT date(datetime) as the_date "
    query += "FROM attendance "
    query += "WHERE "
    query += "date(datetime) != DATE(now()) "
    query += "GROUP BY date(datetime) ORDER BY datetime DESC"
    mysql.query(query, [], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

module.exports = attendance
