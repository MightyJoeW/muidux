// ACTION TYPES
const EXAMPLE = 'EXAMPLE';

// INITIAL STATE
let initialState = {
    exampleText: '',
}

// ACTION CREATORS
export const updateExampleText = () => ({
    type: EXAMPLE,
    payload: 'Updated exampleText'
})

// REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE:
            return Object.assign({}, state, { exampleText: action.payload })
        default:
            return state
    }
}

export default reducer;

