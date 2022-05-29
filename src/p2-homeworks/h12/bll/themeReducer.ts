const initState: initStateType = {
    theme: ['dark']
};

type initStateType = {
 theme: Array<string>
}

export const themeReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state, theme: [action.theme] };
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => ({type: 'SET-THEME', theme} as const); // fix any







export const myThemeReducer = (state:initStateType = initState, action: myActionType): initStateType => { // fix any
    switch (action.type) {
        case "SET-MY-THEME": {
            return {...state, theme: [action.theme] };
        }
        default: return state;
    }
};

type myActionType = ReturnType<typeof changeMyThemeC>
export const changeMyThemeC = (theme: string) => ({type: 'SET-MY-THEME', theme} as const); // fix any