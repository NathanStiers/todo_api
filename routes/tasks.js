/**
 * Load modules
 */

var express = require('express')
var router = express.Router()
//const db = require('../modules/db')

var tasksList = {tasks : ["Faire les courses","Nourir le chat"]};

router.get('/add/:task', function (req, res) {
    tasksList.tasks.push(req.params.task);
    res.setHeader('Content-Type', 'application/json');
    res.json(tasksList);
})

router.get('/delete/:id', function (req, res) {
    tasksList.tasks.splice(req.params.id,1);
    res.setHeader('Content-Type', 'application/json');
    res.json(tasksList);
})

router.get('/fetch', function (req, res) {
    console.info("fetching")
    res.setHeader('Content-Type', 'application/json');
    res.json(tasksList);
})

/**
 * Exports
 */

module.exports = router
