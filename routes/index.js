var express = require('express');
var router = express.Router();

const PremiseController = require('../src/controller/Premise.js')
const AttendanceController = require('../src/controller/Attendance.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/premise/:uuid', (req, res, next) => {
  PremiseController.get_info(req.params.uuid, (err, response) => {
    if(err){
      res.json(err)
     } else {
      res.json(response)
    }
  })
})


router.post('/attendance/', (req, res, next) => {
  AttendanceController.create_attendance(req.body, (err, response)=>{
    if(err)
      res.json(err)
    res.json(response)
  })
})

router.post('/attendance/list', (req, res, next) => {
  AttendanceController.get_attendance(req.body, (err, response) => {
    if(err)
      res.json(err)
    res.json(response)
  })
})

router.post('/attendance/date-group', (req, res, next) => {
  AttendanceController.get_date_grouping(req.body, (err, response) => {
    if(err)
      res.json(err)
    res.json(response)
  })
})

module.exports = router;
