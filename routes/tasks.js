/**
 * Load modules
 */

var express = require('express')
var router = express.Router()
//const db = require('../modules/db')

var tasksList = ["Faire les courses","Nourir le chat"];

router.get('/add/:task', function (req, res) {
    tasksList.push(req.params.task);
    res.send(tasksList);
})

router.get('/delete/:id', function (req, res) {
    tasksList.splice(req.params.id,1);
    res.send(tasksList);
})

router.get('/fetch', function (req, res) {
    console.info("fetching")
    res.send(tasksList);
})

/**
 * Exports
 */

module.exports = router