

const initialState = {
    loggedUser: "",
    mathOutput: ""
}

export function reducer(state = initialState, action) {
    if (action.type === "USER_LOGIN") {
        return { ...state, loggedUser: action.payload }
    }
    else if (action.type === "USER_LOGOUT") {
        return { ...state, loggedUser: action.payload }
    }
    else if (action.type === "ADD_VALUES") {
        const value1 = action.payload.value1
        const value2 = action.payload.value2
        if (value1 && value2) {
            return { ...state, mathOutput: +value1 + +value2 }
        } else {
            return { ...state, mathOutput: "enter values" }
        }
    }
    else if (action.type === "SUBSTRACT_VALUES") {
        const value1 = action.payload.value1
        const value2 = action.payload.value2
        if (value1 && value2) {
            return { ...state, mathOutput: +value1 - +value2 }
        } else {
            return { ...state, mathOutput: "enter values" }
        }
    }
    else if (action.type === "MULTIPLE_VALUES") {
        const value1 = action.payload.value1
        const value2 = action.payload.value2
        if (value1 && value2) {
            return { ...state, mathOutput: +value1 * +value2 }
        } else {
            return { ...state, mathOutput: "enter values" }
        }
    }
    else if (action.type === "DIVIDE_VALUES") {
        const value1 = action.payload.value1
        const value2 = action.payload.value2
        if (value1 && value2) {
            if (value2 === "0") {
                return { ...state, mathOutput: "Cannot divide by 0" }
            } else {
                return { ...state, mathOutput: +value1 / +value2 }
            }
        } else {
            return { ...state, mathOutput: "enter values" }
        }
    }
    return state
}
