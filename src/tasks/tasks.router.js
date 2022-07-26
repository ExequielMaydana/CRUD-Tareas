const router = require('express').Router()
const httpTask = require('./tasks.http')

router.route('/tasks')
    .get(httpTask.getAll)
    .post(httpTask.getCreateTask)


router.route('/tasks/:id')
    .delete(httpTask.getDeleteTask)
    .put(httpTask.getUpdateTask)
    .get(httpTask.getById)


module.exports = {
    router
}