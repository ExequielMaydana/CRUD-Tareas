const express = require('express')
const tasksRouter = require('./tasks/tasks.router').router

const app = express()

app.use(express.json())

app.use('/todolist/v1', tasksRouter)

app.listen(8000, () => {
    console.log('Server started at port 8000');
})