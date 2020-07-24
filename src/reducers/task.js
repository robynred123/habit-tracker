const initialState = {
    tasks: [],
    selectedTask: null
}

const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_TASKS_SUCCESS':
           return {
               ...state,
               tasks: action.payload
           }
        case 'ADD_TASK_SUCCESS': 
        console.log('added task!')
            /*return {
                ...state,
                tasks: {
                    ...tasks + action.payload
                }
                
            }*/

        default:
            return state
    }
}

export default taskReducer;