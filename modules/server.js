/**
 * Load modules
 */

const express = require('express');
const bodyParser = require('body-parser')
const tasksRouter = require('../routes/tasks');



/**
 * Variables
 */

// Global variables
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 80;
const app = express();



/**
 * Configuration
 */

// Configure routes
app.use(bodyParser.json({limit:"1.1MB"}))
app.use('/tasks', tasksRouter);

// Start server
var start = function (callback) {
    app.listen(port, host, () => {
        console.info(`[SERVER] Listening on http://${host}:${port}`);
        if (callback) callback(null);
    });
};



/**
 * Exports
 */
exports.start = start;