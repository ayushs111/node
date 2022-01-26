var express = require('express')
const { param } = require('express/lib/request')
var router = express.Router()
const Tour = require('../modals/TourModal')

/* GET home page. */
router.get('/tours', async function (req, res, next) {
  try {
  
    let allTour = await Tour.find()
    res.status(200).json({
      status: 'success',
      body: allTour,
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err, 
    })
  }
})
// ayush sojitra
router.get('/tours/id?', async function (req, res, next) {
  try {
    let allTour = await Tour.find()
    res.status(200).json({
      status: 'success',
      body: allTour,
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
})

module.exports = router
