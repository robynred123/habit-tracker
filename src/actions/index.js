import React from 'react';
import taskQueries from '../api/index'

export const initialiseDb = () => {
    taskQueries.createTable()
}

export const getTasks = () => dispatch => {
    dispatch({ type: 'LOAD_TASKS_LOADING' });
    
    taskQueries.getTasks()
    .then(response => response.json())
    .then(data => dispatch({
            type: 'GET_TASKS_SUCCESS',
            data
        }),
        error => dispatch({
            type: 'GET_TASKS_FAILURE',
            error: 'Failed to get tasks'
        })
    )
}

export const addTask = (task) => {
    //taskQueries.addTask(task)
    console.log(task)
    return ({ 
        type: 'ADD_TASK_SUCCESS',
        payload: {   
            'id': '1', 
            'name': "first task"
        }
    })
}