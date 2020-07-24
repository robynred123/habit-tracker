import React from 'react';
//import taskQueries from '../api/index'

export const getTasks = () => {
    return ({ 
        type: 'GET_TASKS_SUCCESS',
        payload: {   
            'id': '1', 
            'name': "hello"
        }
    })
}

export const addTask = (task) => {
    //taskQueries.addTask(task)
    return ({ 
        type: 'ADD_TASK_SUCCESS',
        payload: task
    })
}