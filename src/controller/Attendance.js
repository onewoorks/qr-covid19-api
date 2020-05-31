const AttendanceModel = require('../model/mysql/Attendance.js')

exports.create_attendance = (payloads, result) => {
    AttendanceModel.create_attendance(payloads, (err, res)=>{
        if(err)
            result(err)
        result(null, res)
    })
}

exports.get_attendance = (payloads, result) => {
    AttendanceModel.get_list_attendance(payloads, (err, res) => {
        if(err)
            result(err)
        let data = []
        let response_data = JSON.parse(JSON.stringify(res))
        response_data.map(x => {
            x.attendee_payloads = JSON.parse(x.attendee_payloads)
            data.push(x)
        })
        result(null,data)
    })
}

exports.get_date_grouping = (payloads, result) => {
    AttendanceModel.get_date_grouping(payloads, (err, res) => {
        if(err)
            result(err)
        result(null, res)
    })
}