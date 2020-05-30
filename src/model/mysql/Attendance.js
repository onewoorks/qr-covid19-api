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
    console.log(filter_data)
    let query = "SELECT * FROM attendance WHERE cawangan=? AND DATE(datetime) = ? "
    mysql.query(query, [filter_data.uuid, filter_data.tarikh], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

attendance.get_date_grouping = (uuid, result) => {
    let query = "SELECT date(datetime) as the_date FROM attendance WHERE cawangan=? GROUP BY date(datetime) ORDER BY datetime DESC"
    mysql.query(query, [222], (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}

module.exports = attendance
