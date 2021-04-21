export const todoDetailsChange = (dispatch, key, value, name) => {
    dispatch({
        type: "TODO_DETAILS_ON_CHANGE",
        value: value,
        key:key,
        name:name
    });
}

export const todoDetailsSubmit = (dispatch, value) => {
    dispatch({
        type: "TODO_DETAILS_SUBMIT",
        value:value
    });
}

export const cancelDetails = (dispatch, key, value) => {
    dispatch({
        type: "TODO_DETAILS_CANCEL",
        value: value,
        key:key
    });
}

export const deleteTodo = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_DELETE",
        rowId: value,
        items: items
    });
}

export const completeTodo = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_COMPLETE",
        rowId: value,
        items: items
    });
}
export const reopenTodo = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_REOPEN",
        rowId: value,
        items: items
    });
}
export const editTodo = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_EDIT",
        rowId: value,
        items: items
    });
}

export const editTodoUpdate = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_EDIT_UPDATE",
        rowId: value,
        items:items
    });
}

export const editTodoDetailsChange = (dispatch, key, value) => {
    dispatch({
        type: "EDIT_TODO_DETAILS_ON_CHANGE",
        value: value,
        key:key
    });
}
