//! controladores
const tasksDB = []

/*
{
    id: 1,
    title: "",
    description: "",
    date: "",
    done: true
}
*/
//? este controlador retorna todas las tareas
const getAllTasks = () => {
    return tasksDB;
}

//? controlador para mostrar una tarea en especifica
const getTasksById = (id) => {
    const filteredBD = tasksDB.filter(task => task.id === id);
    return filteredBD[0];
}

//? controlador para crear una nueva tarea
const createTask = (taskObj) => {
    // si no tiene todavia ninguna tarea agregada a la BD se crea con el id 1
    if(tasksDB.length === 0){
        const newTask = {
            id: 1,
            title: taskObj.title,
            description: taskObj.description,
            date: taskObj.date,
            done: taskObj.done
        }
        tasksDB.push(newTask);
        return newTask;
    }
    // si ya tiene tareas en la BD el id se va incrementando de 1 en 1.
    const newTask = {
        id: tasksDB[tasksDB.length - 1].id + 1,
        title: taskObj.title,
        description: taskObj.description,
        date: taskObj.date,
        done: taskObj.done
    };

    tasksDB.push(newTask);
    return newTask;
}

const deleteTask = (id) => {
    const index = tasksDB.findIndex((item) => item.id === id);
    if(index !== -1){
        tasksDB.splice(index, 1);
    }

    return tasksDB;
}


const updateTask = (data, id) => {
    const index = tasksDB.findIndex((item) => item.id === id)
    if(data.title && data.description && data.date && data.done){
        tasksDB[index] = {
            id,
            title: data.title,
            description: data.description,
            date: data.date,
            done: data.done
        }
    }

    return tasksDB[index]
}

module.exports = {
    getAllTasks,
    getTasksById,
    createTask,
    deleteTask,
    updateTask
}