/**
 * Load modules
 */

var express = require('express')
var router = express.Router()
//const db = require('../modules/db')

var tasksList = ["Faire les courses","Nourir le chat"];

router.get('/add/:task', function (req, res) {
    tasksList.push(req.params.task);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ tasksList }));
})

router.get('/delete/:id', function (req, res) {
    tasksList.splice(req.params.id,1);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ tasksList }));
})

router.get('/fetch', function (req, res) {
    console.info("fetching")
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ tasksList }));
})

/**
 * Exports
 */

module.exports = router
