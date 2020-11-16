import React from 'react';
import axios from 'axios';
//import taskQueries from '../api/index'

const url = 'http://localhost:3000/habits';

export const initialiseDb = () => dispatch => {
    taskQueries.createTable()
}

export const getTasks = () => dispatch => {
    dispatch({ type: 'LOAD_TASKS_LOADING' });

    return axios.get(url)
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