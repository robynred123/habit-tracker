const initialState = {
    tasks: [],
    taskKey: null,
    selectedTask: null,
    loading: false,
    error: {
        visible: false,
        message: ''
    }
}

const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_TASKS_SUCCESS':
           return {
               ...state,
               tasks: action.data,
               loading: false
           }
        case 'ADD_TASK_SUCCESS': 
        console.log('added task!')
        //temporary solution to prevent state updates
            if(action.payload.length === state.tasks.length){
                return {
                    ...state,
                    loading:false
                }
            }
            const updatedTasks = state.tasks.concat(action.payload)
            return {
                ...state,
                tasks: updatedTasks,
                taskKey: action.payload.length,
                loading: false
            }
        case 'GET_TASKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: {
                    visible: true,
                    message: 'error'
                }
            }
        case 'GET_TASKS_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default taskReducer;