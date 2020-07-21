const initialState = {
    tasks: [],
    selectedTask: null
}

const taskReducer = (state, action) => {
    switch(action.type) {
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