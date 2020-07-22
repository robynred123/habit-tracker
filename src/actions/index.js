import React from 'react';
//import taskQueries from '../api/index'

export const getTasks = () => {
    console.log('Hello!')
    return ({ 
        type: 'GET_TASKS_SUCCESS',
        payload: {   
            'id': '1', 
            'name': "hello"
        }
    })
}

export const addTask = async(task) => {
    try {
        //taskQueries.addTask(task)
        console.log('Add task actioncalled!')
        dispatch({ 
            type: 'ADD_TASK_SUCCESS',
            //payload: task
        })
    }
    catch(e) {
        console.log(e)
    };
}