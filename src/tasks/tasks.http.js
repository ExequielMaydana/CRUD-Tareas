//! servicios
const {getAllTasks, getTasksById, createTask, deleteTask, updateTask} = require('./tasks.controllers')

//? servicio donde servimos la peticion que requiere a todas las tareas
const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

//? servicio para obtener una tarea en especifica
const getById = (req, res) => {
    const id = Number(req.params.id);

    if(id){
        const data = getTasksById(id);
        if(data.id){
            res.status(200).json(data);
        }else{
            res.status(400).json({message: 'Invalid ID'});
        }
    }else{
        res.status(400).json({message: 'Id is not a number'});
    }
}

//? servicio para crear una tarea
const getCreateTask = (req, res) => {
    const data = req.body;
    
    if(data){
        const task = createTask(data);
        res.status(201).json(task);
    }
}

//? servicio para eliminar una tarea 
const getDeleteTask = (req, res) => {
    const id = Number(req.params.id);

    if(id){
        const data = deleteTask(id)
        res.status(200).json()
    }else{
        res.status(400).json({message: 'Invalid ID'})
    }
}

//? servicio para editar una tarea
const getUpdateTask = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    if(id){
        const task = updateTask(data, id)
        if(task.id){
            res.status(200).json()
        }else{
            res.status(400).json({message: 'lack of data'})
        }
    }else{
        res.status(400).json({message: 'Invalid ID'})
    }
}

module.exports = {
    getAll,
    getById,
    getCreateTask,
    getDeleteTask,
    getUpdateTask
}