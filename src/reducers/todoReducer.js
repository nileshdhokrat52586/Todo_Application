export const todoDetailsReducer = (state, action) => {
    switch (action.type) {
        case "TODO_DETAILS_ON_CHANGE":
            if (action.name == "summary") {
                if (action.value.length < 10) {
                    state.todoDetails.todoDetailsErrors['summary'] = "The summary at least should have 10 characters.";
                }
                else if (action.value.length > 140) {
                    state.todoDetails.todoDetailsErrors['summary'] = "The summary should not exceed 400 characters.";
                }
                else {
                    delete state.todoDetails.todoDetailsErrors['summary']
                }
            }
            if (action.name == "description") {
                if (action.value.length < 10) {
                    state.todoDetails.todoDetailsErrors['description'] = "The description at least should have 10 characters.";
                }
                else if (action.value.length > 500) {
                    state.todoDetails.todoDetailsErrors['description'] = "The description should not exceed 500 characters.";
                }
                else {
                    delete state.todoDetails.todoDetailsErrors['description']
                }
            }
            return {
                ...state.todoDetails,
                [action.key]: action.value,
            }
        default:
            return state.todoDetails
    }
}

export const deleteTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_DETAILS_DELETE":
            const conf = window.confirm("Are sure to delete todo?");
            if (conf) {
                return [
                    ...state.todoDetailsArray = action.items.splice(action.rowId, 1),
                ]
            }
        default:
            return state.todoDetailsArray
    }
}

export const completeTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_DETAILS_COMPLETE":
            return [
                action.items[action.rowId].todoStateCompleted = true,
            ]
        case "TODO_DETAILS_REOPEN":
            return [
                action.items[action.rowId].todoStateCompleted = false,
            ]
        default:
            return state.todoDetailsArray
    }
}

export const editTodoReducer = (state, action) => {
    switch (action.type) {
        case "TODO_DETAILS_EDIT":
            let editTodo = action.items.filter(function (e) {
                return e.rowId == action.rowId + 1;
            });
            if (editTodo.length > 0) {
                return {
                    ...state.editTodo,
                    summary: editTodo[0].summary,
                    description: editTodo[0].description,
                    priority: editTodo[0].priority,
                    dueDate: editTodo[0].dueDate,
                    rowId: editTodo[0].rowId,
                    createdOn: editTodo[0].createdOn,
                    currentStatus: editTodo[0].todoStateCompleted,
                    isRowEdited: true,
                }
            }
        case "EDIT_TODO_DETAILS_ON_CHANGE":
            return {
                ...state.editTodo,
                [action.key]: action.value,
            }
        case "TODO_DETAILS_EDIT_UPDATE":
            const confUpdate = window.confirm("Are sure to update todo?");
            if (confUpdate) {
                return [
                    action.items[action.rowId - 1].summary = state.editTodo.summary,
                    action.items[action.rowId - 1].description = state.editTodo.description,
                    action.items[action.rowId - 1].priority = state.editTodo.priority,
                    action.items[action.rowId - 1].dueDate = state.editTodo.dueDate
                ]
            }

        default:
            return [state.editTodo]
    }
}

export const editTodoDetailsReducer = (state, action) => {
    switch (action.type) {
        case "EDIT_TODO_DETAILS_ON_CHANGE":
            return {
                ...state.editTodo,
                [action.key]: action.value,
            }
        default:
            return state.editTodo
    }
}
export const cancelReducer = (state, action) => {
    switch(action.type){
        case "TODO_DETAILS_CANCEL":
        return{
            ...state.todoDetails,
            rowId : 1,
            summary : '',
            description:'',
            priority: '',
            dueDate:'',
            createdOn:'',
            todoStateCompleted : false
        }
        default:
            return state.cancelDetails
    }
}
export const todoDetailsArrayReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_DETAILS_SUBMIT":
            return [
                ...state.todoDetailsArray, action.value
            ]
        default:
            return state.todoDetailsArray
    }
}
