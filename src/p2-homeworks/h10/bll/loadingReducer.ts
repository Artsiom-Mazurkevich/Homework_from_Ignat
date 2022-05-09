

export type initialStateType = {
    spinning: boolean
}

const initialState = {
    spinning: false
}

type ActionType = ReturnType<typeof loadingAC>


export const loadingReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE-SPINNING': {
            return {...state, spinning: action.isSpinning}
        }
        default: return state
    }
}

export const loadingAC = (isSpinning: boolean) => ({type: 'TOGGLE-SPINNING', isSpinning} as const)