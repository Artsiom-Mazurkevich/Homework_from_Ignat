import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: any
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a,b) => {return action.payload === 'up' ? b.age - a.age : a.age - b.age})
        }
        case 'check': {
            return state.filter( u => u.age >= action.payload)
        }
        default: return state
    }
}